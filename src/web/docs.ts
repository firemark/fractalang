import { renderToken } from "./tokens";
import { renderStave } from "./code";
import { run, scrapeCode } from "./run";

import "../style/docs.scss";

interface TutAnimParams {
    staves: string[],
    iterations: number,
    start: number,
    tokens: string[],
    title: string,
    nodeId: string,
}

let ICONS_URL_PREFIX = "";

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
        this.node.classList.add("fract-animation");
        if (params.title.length > 0) {
            const titleNode = document.createElement("h1");
            titleNode.classList.add("fract-title");
            titleNode.innerText = params.title;
            this.node.appendChild(titleNode);
        }
        {
            const imageNode = document.createElement("div");
            imageNode.classList.add("fract-image");
            this.node.appendChild(imageNode);
        }
        {
            const stavesNode = document.createElement("ul");
            stavesNode.classList.add("fract-staves");
            params.staves.forEach(fullLineName => {
                const [name, suffix] = this.splitFullLineName(fullLineName);
                const lineNode = renderStave({
                    name,
                    suffix,
                    isEditable: false,
                    iconUrl: ICONS_URL_PREFIX,
                });
                stavesNode.appendChild(lineNode);
            });
            this.node.appendChild(stavesNode);
        }
        {
            const commentNode = document.createElement("div");
            commentNode.classList.add("fract-comment");
            this.node.appendChild(commentNode);
        }
        {
            const barNode = document.createElement("div");
            barNode.classList.add("fract-bar");
            {
                const btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "« PREV";
                btnNode.name = "prev";
                btnNode.disabled = this.position <= 0;
                btnNode.addEventListener("click", this.prev.bind(this));
                barNode.appendChild(btnNode);
            }
            {
                const btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "NEXT »";
                btnNode.name = "next";
                btnNode.disabled = this.position >= this.tokens.length - 1;
                btnNode.addEventListener("click", this.next.bind(this));
                barNode.appendChild(btnNode);
            }
            {
                const labelNode = document.createElement("label");
                labelNode.htmlFor = "iterations";
                labelNode.innerText = "Iterations:";
                barNode.appendChild(labelNode);
            }
            {
                const itNode = document.createElement("input");
                itNode.type = "number";
                itNode.value = this.iterations.toFixed();
                itNode.disabled = true;
                itNode.name = "iterations";
                barNode.appendChild(itNode);
            }
            this.node.appendChild(barNode);
        }
    }

    iterateToPosition(params: TutAnimParams) {
        for(let i = 0; i < params.start; i++) {
            this.position += 1;
            this.nextExecute();
        }
        this.renderImage();
        this.updateComment();
    }

    next() {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
        this.updateComment();
        this.renderImage();
        this.findInput("next").disabled = this.position >= this.tokens.length - 1;
        this.findInput("prev").disabled = false;
    }

    prev() {
        if (this.position <= 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
        this.updateComment();
        this.renderImage();
        this.findInput("next").disabled = false;
        this.findInput("prev").disabled = this.position <= 0;
    }

    private findInput(name: string): HTMLInputElement {
        return this.node.querySelector(`[name='${name}']`);
    }

    private renderImage() {
        const imageNode = this.node.querySelector(".fract-image") as HTMLElement;
        const code = scrapeCode(this.node.querySelector(".fract-staves"));
        run(imageNode, code, this.iterations);
    }

    private nextExecute() {
        this.getCommands().forEach(command => {
            if (command[0] != "!") {
                const [line, token] = command.split("@", 2);
                this.domPushToken(line, token);
                return;
            }
            switch(command.substring(1)) {
                case "IT_INC":
                    this.iterations += 1;
                    this.updateIterationsInput();
                break;
                case "IT_DEC":
                    this.iterations -= 1;
                    this.updateIterationsInput();
                break;
                case "NOP": break;
                default: console.error(`${command} not found`); break;
            }
        });
    }

    private prevExecute() {
        this.getCommands().forEach(command => {
            if (command[0] != "!") {
                const [line] = command.split("@", 1);
                this.removeLastToken(line);
                return;
            }
            switch(command.substring(1)) {
                case "IT_INC":
                    this.iterations -= 1;
                    this.updateIterationsInput();
                break;
                case "IT_DEC":
                    this.iterations += 1;
                    this.updateIterationsInput();
                break;
                case "NOP": break;
                default: console.error(`${command} not found`); break;
            }
        });
    }

    private getCommands(): string[] {
        const commandWithComment = this.tokens[this.position];
        const [rawCommands] = commandWithComment.split("#", 1);
        return rawCommands.split(",").map(rawCommand => rawCommand.trim());
    }

    private updateComment() {
        const commandWithComment = this.tokens[this.position];
        const [, rawComment] = commandWithComment.split("#", 2);
        const comment = rawComment ? rawComment.trim() : "";
        const commentNode = this.node.querySelector(".fract-comment") as HTMLElement;
        commentNode.innerText = comment;
    }

    private updateIterationsInput() {
        this.findInput("iterations").value = this.iterations.toFixed();
    }

    private domPushToken(fullLineName: string, token: string) {
        const tokensNode = this.findLine(fullLineName);
        const tokenNode = renderToken(token, {
            isTemplate: false,
            isEventable: false,
            iconUrl: ICONS_URL_PREFIX
        });
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

const ANIMATIONS_PARAMS: TutAnimParams[] = [];
const CURRENT_HREF = (document.currentScript as HTMLScriptElement).src;

export function makeAnimation(params: TutAnimParams) {
    ANIMATIONS_PARAMS.push(params);
}

function setIconsUrls() {
    const dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    ICONS_URL_PREFIX = `${dirnameHref}../_images`;
}

function renderAll() {
    ANIMATIONS_PARAMS.forEach(params => {
        const animation = new TutAnim(params);
        animation.initRender(params);
        animation.iterateToPosition(params);
    });
}

window.addEventListener('load', event => {
    setIconsUrls();
    renderAll();
});

// ON INIT
