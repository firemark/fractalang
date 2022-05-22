import { renderToken } from "./tokens";
import { renderStave } from "./code";
import { run, scrapeCode } from "./run";

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

class Controller {

    protected findInput(name: string): HTMLInputElement {
        return this.node.querySelector(`[name='${name}']`);
    }

    protected renderImage() {
        const imageNode = this.node.querySelector(".fract-image") as HTMLElement;
        const code = scrapeCode(this.node.querySelector(".fract-staves"));
        run(imageNode, code, this.iterations);
    }

    showOrHideOrAddFunction(name: string, suffix: string = ""): void {
        const codeNode = document.getElementById("code");
        const funcNode = codeNode.querySelector(`.stave[data-name="${name}"][data-suffix="${suffix}"]`);
        if (!funcNode) {
            codeNode.appendChild(renderStave({name, suffix, tokens: []}));
        } else {
            funcNode.classList.toggle("hide");
        }
    }
}
