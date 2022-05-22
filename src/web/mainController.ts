import { Controller } from "./controller";

interface Stave {
    name: string,
    tokens: string[],
};

interface Params {
    staves: Stave[],
    iterations: number,
    title: string,
    node: HTMLElement,
};

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

class MainController extends Controller {
    private staves: Staves[];
    private readonly INPUTS = [
        "iterations",
        "first-color",
        "second-color",
        "stroke-size",
    ];

    constructor(params: Params) {
        this.tokens = params.tokens;
        this.iterations = params.iterations || 1;
        this.node = params.node;

        this.codeView = new CodeView(this.node);
    }

    initRender(params: Params) {
        setEvents();
        this.codeView.renderStaves(this.staves);
    }
}
