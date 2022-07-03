import { Controller } from "./controller";

import { CodeView } from "../views/code";
import { FunctionsBarView } from "../views/functionsBar";
import { TokensCategoryView } from "../views/categoryToken";
import { ImageView } from "../views/image";
import { CodeBarView } from "../views/codeBar";

import { Stave } from "../models";
import { ACTION_TOKENS, VALUE_TOKENS } from "../tokens";

import { exec } from "../../exec";

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
            onChange: () => { this.scrapeAndRun(this.codeBarView.getData()); },
            isDraggable: true,
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
        });
        this.valuesCategoryView = new TokensCategoryView({
            node: document.getElementById("value-tokens"),
            categories: VALUE_TOKENS,
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
        console.log(data);
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

        this.imageView.render(cursor);
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
