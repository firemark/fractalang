import { Controller } from "./controller";

import { CodeView } from "../views/code";
import { FunctionsBarView } from "../views/functionsBar";
import { TokensCategoryView } from "../views/categoryToken";
import { ImageView } from "../views/image";

import { Stave } from "../models";
import { ACTION_TOKENS, VALUE_TOKENS } from "../tokens";

import { exec } from "../../exec";

export class MainController extends Controller {
    private imageView: ImageView;
    private codeView: CodeView;
    private functionsBarView: FunctionsBarView;
    private actionsCategoryView: TokensCategoryView;
    private valuesCategoryView: TokensCategoryView;

    constructor() {
        super(document.querySelector("main"));
        this.imageView = new ImageView(this.node.querySelector(".fract-image"));
        this.codeView = new CodeView({
            node: this.node.querySelector(".fract-staves"),
            onChange: () => { this.scrapeAndRun(); },
            isDraggable: true,
        });
        this.functionsBarView = new FunctionsBarView({
            node: this.node.querySelector(".fract-functions-list"),
            onSelect: (name: string, suffix: string) => {
                this.showOrHideOrAddFunction(name, suffix);
                this.scrapeAndRun();
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
    }

    render(staves: Stave[]) {
        this.codeView.render(staves);
        this.functionsBarView.render();
        this.actionsCategoryView.render();
        this.valuesCategoryView.render();
        this.scrapeAndRun();
    }

    scrapeAndRun() {
        const cursorCfg = {
            firstColor: this.scrapeInput("first-color"),
            secondColor: this.scrapeInput("second-color"),
            strokeSize: this.scrapeInputAsFloat("stroke-size"),
        };
        const argument = 1.0;
        const maxIteration = this.scrapeInputAsInt("iterations");
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

function setEvents() {
    document.getElementById("action-hide").addEventListener('click', () => {
        document.getElementById("action-hide").classList.add("hidden");
        document.getElementById("action-show").classList.remove("hidden");
        document.getElementById("code-panel").classList.add("hidden");
        return false;
    }, false);

    document.getElementById("action-show").addEventListener('click', () => {
        document.getElementById("action-show").classList.add("hidden");
        document.getElementById("action-hide").classList.remove("hidden");
        document.getElementById("code-panel").classList.remove("hidden");
        return false;
    }, false);
}
