import { Controller } from "./controller";

import { CodeView } from "@/web/views/code";
import { FunctionsBarView } from "@/web/views/functionsBar";
import { TokensCategoryView } from "@/web/views/categoryToken";
import { ImageView } from "@/web/views/image";
import { CodeBarView } from "@/web/views/codeBar";

import { Stave } from "@/web/models";
import { ACTION_TOKENS, VALUE_TOKENS } from "@/web/tokens";

import { exec } from "@/core/exec";

export class MainController extends Controller {
    private imageView: ImageView;
    private codeView: CodeView;
    private functionsBarView: FunctionsBarView;
    private actionsCategoryView: TokensCategoryView;
    private valuesCategoryView: TokensCategoryView;
    private codeBarView: CodeBarView;

    constructor() {
        super(document.querySelector("main"));
        this.imageView = new ImageView(this.node.querySelector(".fract-image"));
        this.codeView = new CodeView({
            node: this.node.querySelector(".fract-staves"),
            onDrop: this.onDrop.bind(this),
        });
        this.functionsBarView = new FunctionsBarView({
            node: this.node.querySelector(".fract-functions-list"),
            onSelect: (name: string, suffix: string) => {
                this.showOrHideOrAddFunction(name, suffix);
                this.scrapeAndRun(this.codeBarView.getData());
            }
        });
        this.actionsCategoryView = new TokensCategoryView({
            node: document.getElementById("action-tokens"),
            categories: ACTION_TOKENS,
            onDrop: this.onDrop.bind(this),
        });
        this.valuesCategoryView = new TokensCategoryView({
            node: document.getElementById("value-tokens"),
            categories: VALUE_TOKENS,
            onDrop: this.onDrop.bind(this),
        });
        this.codeBarView = new CodeBarView({
            node: document.getElementById("code-bar"),
            onUpdate: this.scrapeAndRun.bind(this),
        });
    }

    render(staves: Stave[]) {
        this.codeView.render(staves);
        this.functionsBarView.render();
        this.actionsCategoryView.render();
        this.valuesCategoryView.render();
        this.codeBarView.render();
        this.scrapeAndRun(this.codeBarView.getData());
    }

    scrapeAndRun(data) {
        const cursorCfg = {
            firstColor: data["first-color"],
            secondColor: data["second-color"],
            strokeSize: data["stroke-size"],
        };
        const argument = 1.0;
        const maxIteration = data["iterations"];
        const code = this.codeView.scrapeCode();

        const cursor = exec(argument, maxIteration, code, cursorCfg);
        cursor.addMargin(20);

        this.imageView.render(cursor, data["background-color"]);
    }

    private onDrop(dragNode: HTMLElement, overNode: HTMLElement) {
        const findStave = dataset => this.codeView.findStave(dataset.name, dataset.suffix);

        if (overNode.classList.contains("fract-staves")) { // REMOVE
            const indexToRemove = parseInt(dragNode.dataset.index);
            if (!indexToRemove) {
                return;
            }
            findStave(dragNode.dataset).removeToken(indexToRemove);
        }

        if (overNode.classList.contains("fract-token-span")) {  // ADD/MOVE
            const indexToMove = parseInt(dragNode.dataset.index);
            const goalIndex = parseInt(overNode.dataset.index);
            const goalStaveView = findStave(overNode.dataset);

            goalStaveView.pushTokenAfter(dragNode.dataset.token, goalIndex);

            if (indexToMove) {
                const prevStaveView = findStave(dragNode.dataset);
                const shift = Object.is(prevStaveView, goalStaveView) && goalIndex <= indexToMove ? 1 : 0;
                prevStaveView.removeToken(indexToMove + shift);
            }
        }

        this.scrapeAndRun(this.codeBarView.getData());
    }

    private showOrHideOrAddFunction(name: string, suffix: string = ""): void {
        const staveView = this.codeView.findStave(name, suffix);
        if (staveView) {
            staveView.showOrHide();
        } else {
            this.codeView.addStave({name, suffix, tokens: []});
        }
    }
}
