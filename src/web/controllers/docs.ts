import { Controller } from "./controller";

import { CodeView } from "../views/code";
import { DocBarView } from "../views/docBar";
import { TitleView } from "../views/title";
import { CommentView } from "../views/comment";
import { ImageView } from "../views/image";

import { Stave } from "../models";
import { exec } from "../../exec";

export interface TutAnimParams {
    staves: string[];
    iterations: number,
    start: number,
    tokens: string[],
    title: string,
    nodeId: string,
}


export class DocsController extends Controller {
    private imageView: ImageView;
    private codeView: CodeView;
    private docBarView: DocBarView;
    private commentView: CommentView;
    private titleView: TitleView;

    private iterations: number;
    private position: number;
    private tokens: string[];

    constructor(params: TutAnimParams) {
        super(document.getElementById(params.nodeId));
        this.initRender(params);

        this.iterations = params.iterations;
        this.position = params.start;
        this.tokens = params.tokens;

        this.imageView = new ImageView(this.node.querySelector(".fract-image"));
        this.titleView = new TitleView(this.node.querySelector(".fract-title"));
        this.commentView = new CommentView(this.node.querySelector(".fract-comment"));
        this.docBarView = new DocBarView({
            node: this.node.querySelector(".fract-bar"),
            next: this.next.bind(this),
            prev: this.prev.bind(this),
        });
        this.codeView = new CodeView({
            node: this.node.querySelector(".fract-staves"),
            onChange: () => { this.scrapeAndRun(); },
        });
    }

    initRender(params: TutAnimParams) {
        this.node.classList.add("fract-animation");
        if (params.title.length > 0) {
            const titleNode = document.createElement("h1");
            titleNode.classList.add("fract-title");
            this.node.appendChild(titleNode);
        }
        {
            const stavesNode = document.createElement("ul");
            stavesNode.classList.add("fract-staves");
            this.node.appendChild(stavesNode);
        }
        {
            const imageNode = document.createElement("div");
            imageNode.classList.add("fract-image");
            this.node.appendChild(imageNode);
        }
        {
            const commentNode = document.createElement("div");
            commentNode.classList.add("fract-comment");
            this.node.appendChild(commentNode);
        }
        {
            const barNode = document.createElement("div");
            barNode.classList.add("fract-bar");
            this.node.appendChild(barNode);
        }
    }

    render(params: TutAnimParams) {
        const staveBag: Stave[] = params.staves.map(stave => {
            return {name: stave, tokens: []};
        });
        this.codeView.render(staveBag);
        this.docBarView.render();
        this.titleBarView.render(params.title);
        this.commentBarView.render();
    }

    update() {
        this.updateComment();
        this.scrapeAndRun();
        this.docBarView.update(this.position, this.tokens.length, this.iterations);
    }

    iterateToPosition(params: TutAnimParams) {
        for(let i = 0; i < params.start; i++) {
            this.position += 1;
            this.nextExecute();
        }
        this.scrapeAndRun();
        this.updateComment();
    }

    next() {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
        this.update();
    }

    prev() {
        if (this.position <= 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
        this.update();
    }

    scrapeAndRun() {
        const cursorCfg = {};
        const argument = 1.0;
        const code = this.codeView.scrapeCode();
        const cursor = exec(argument, this.iterations, code, cursorCfg);
        this.imageView.render(cursor);
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
                break;
                case "IT_DEC":
                    this.iterations -= 1;
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
                break;
                case "IT_DEC":
                    this.iterations += 1;
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
        this.commentView.render(comment);
    }

    private domPushToken(fullLineName: string, token: string) {
        const tokensNode = this.findLine(fullLineName);
        const tokenNode = renderToken(token, {
            isTemplate: false,
            isEventable: false,
            iconUrl: ICONS_URL_PREFIX,
        }) as HTMLElement;

        const lastNode = tokensNode.lastChild as HTMLElement;
        if (!lastNode) {
          tokensNode.appendChild(tokenNode);
          return;
        }
        const sibling = lastNode.nextSibling;

        if (tokenNode.dataset.type === "action") {
            tokensNode.insertBefore(tokenNode, sibling);
            return;
        }

        if (lastNode.classList.contains("fract-token-group")) {
            lastNode.appendChild(tokenNode);
        } else {
            const group = document.createElement("div");
            group.classList.add("fract-token-group");
            tokensNode.insertBefore(group, sibling);
            tokensNode.removeChild(lastNode);
            group.appendChild(lastNode);
            group.appendChild(tokenNode);
        }
    }

    private removeLastToken(fullLineName: string) {
        const tokensNode = this.findLine(fullLineName);
        const lastNode = tokensNode.lastChild as HTMLElement;

        if (lastNode.classList.contains("fract-token-group")) {
            lastNode.removeChild(lastNode.lastChild);
            if (!lastNode.lastChild) {
                tokensNode.removeChild(lastNode);
            }
        } else {
            tokensNode.removeChild(lastNode);
        }
    }

    private findLine(fullLineName: string): HTMLElement {
        const [name, suffix] = this.splitFullLineName(fullLineName);
        const query = `.function[data-name='${name}'][data-suffix='${suffix}'] .inner-tokens`;
        return this.node.querySelector(query);
    }

    private splitFullLineName(fullLineName: string): [string, string] {
        const [name, suffix] = fullLineName.split("::", 2);
        return [name, suffix || ""];
    }
}
