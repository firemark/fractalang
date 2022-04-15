import { renderToken } from "./tokens";
import { renderFunction } from "./code";

import "../style/main.scss";

interface TutAnimParams {
    lines: string[],
    iterations: number,
    start: number,
    tokens: string[],
    nodeId: string,
}

class TutAnim {
    private tokens: string[];
    private position: number;
    private iterations: number;
    private node: HTMLElement;

    constructor(params: TutAnimParams) {
        this.tokens = params.tokens;
        this.position = -1;
        this.iterations = params.iterations || 1;
        this.node = document.getElementById(params.nodeId);
    }

    initRender(params: TutAnimParams) {
        {
            const imageNode = document.createElement("div");
            imageNode.classList.add("image");
            this.node.appendChild(imageNode);
        }
        {
            const linesNode = document.createElement("ul");
            linesNode.classList.add("lines");
            params.lines.forEach(fullLineName => {
                const [name, suffix] = this.splitFullLineName(fullLineName);
                const lineNode = renderFunction({name, suffix, isEditable: false});
                linesNode.appendChild(lineNode);
            });
            this.node.appendChild(linesNode);
        }
        {
            const barNode = document.createElement("div");
            barNode.classList.add("bar");
            {
                const btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "« PREV";
                btnNode.addEventListener("click", event => { this.prev(); });
                barNode.appendChild(btnNode);
            }
            {
                const btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "NEXT »";
                btnNode.addEventListener("click", event => { this.next(); });
                barNode.appendChild(btnNode);
            }
            this.node.appendChild(barNode);
        }
    }

    iterateToPosition(params: TutAnimParams) {
        for(let i = 0; i < params.start; i++) {
            this.next();
        }
    }

    next() {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
    }

    prev() {
        if (this.position < 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
    }

    private nextExecute() {
        const command = this.tokens[this.position];
        if (command[0] == "!") {
            // todo actions
            return;
        }
        const [line, token] = command.split("@", 2);
        this.domPushToken(line, token);
    }

    private prevExecute() {
        const command = this.tokens[this.position];
        if (command[0] == "!") {
            // todo actions
            return;
        }
        const [line] = command.split("@", 2);
        this.removeLastToken(line);
    }

    private domPushToken(fullLineName: string, token: string) {
        const tokensNode = this.findLine(fullLineName);
        const tokenNode = renderToken(token, false, false);
        tokensNode.appendChild(tokenNode);
    }

    private removeLastToken(fullLineName: string) {
        const tokensNode = this.findLine(fullLineName);
        tokensNode.removeChild(tokensNode.lastChild);
    }

    private findLine(fullLineName: string): HTMLElement {
        const [name, suffix] = this.splitFullLineName(fullLineName);
        const query = `.function[data-name='${name}'] .inner-tokens`;
        return this.node.querySelector(query);
    }

    private splitFullLineName(fullLineName: string): [string, string] {
        const [name, suffix] = fullLineName.split("::", 1);
        return [name, suffix || ""];
    }
}

const ANIMATIONS: TutAnim[] = [];

export function makeAnimation(params: TutAnimParams) {
    const animation = new TutAnim(params);
    animation.initRender(params);
    animation.iterateToPosition(params);
    ANIMATIONS.push(animation);
}
