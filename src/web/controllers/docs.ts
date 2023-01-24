import { Controller } from "./controller";

import { CodeView } from "@/web/views/code";
import { DocBarView } from "@/web/views/docBar";
import { TitleView } from "@/web/views/title";
import { CommentView } from "@/web/views/comment";
import { ImageView } from "@/web/views/image";
import { StaveView } from "@/web/views/stave";

import { Stave } from "@/web/models";
import { exec, setupExec } from "@/core/exec";
import { Cursor } from "@/core/cursor";

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
    private iconUrl: string;

    constructor(params: TutAnimParams, iconUrl: string) {
        super(document.getElementById(params.nodeId));
        this.initRender(params);

        this.iterations = params.iterations;
        this.tokens = params.tokens;
        this.position = -1;

        this.iconUrl = iconUrl;

        this.imageView = new ImageView(this.node.querySelector(".fract-image"));
        this.titleView = new TitleView(this.node.querySelector(".fract-title"), params.title);
        this.commentView = new CommentView(this.node.querySelector(".fract-comment"));
        this.docBarView = new DocBarView({
            node: this.node.querySelector(".fract-bar"),
            next: this.next.bind(this),
            prev: this.prev.bind(this),
        });
        this.codeView = new CodeView({
            node: this.node.querySelector(".fract-staves"),
            callbacks: {
                onDrop: null,
                onMove: null,
                onDragTimeout: null,
                canDrag: null,
            },
            iconUrl,
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
            const imageNode = document.createElement("div");
            imageNode.classList.add("fract-image");
            this.node.appendChild(imageNode);
        }
        {
            const stavesNode = document.createElement("ul");
            stavesNode.classList.add("fract-staves");
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
            this.node.appendChild(barNode);
        }
    }

    render(params: TutAnimParams) {
        const staveBag: Stave[] = params.staves.map(stave => {
            const [name, suffix = ""] = stave.split("::");
            return { name, suffix, tokens: [] };
        });
        this.codeView.render(staveBag);
        this.docBarView.render(this.position, this.tokens.length, this.iterations);
        this.titleView.render();
        this.commentView.render();
    }

    update() {
        this.updateComment();
        this.scrapeAndRun();
        this.docBarView.update(this.position, this.tokens.length, this.iterations);
    }

    iterateToPosition(params: TutAnimParams) {
        for (let i = 0; i < params.start; i++) {
            this.position += 1;
            this.nextExecute();
        }
        this.update();
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
        const cursor = new Cursor(cursorCfg);
        const stack = setupExec(argument, this.iterations, code, cursor);
        exec(stack);
        this.imageView.render(cursor);
    }

    private nextExecute() {
        this.getCommands().forEach(command => {
            if (command[0] != "!") {
                const [stave, token] = command.split("@", 2);
                this.pushTokenOnBack(stave, token);
                return;
            }
            switch (command.substring(1)) {
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
            switch (command.substring(1)) {
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

    private pushTokenOnBack(fullStaveName: string, token: string) {
        const stave = this.findStave(fullStaveName);
        stave.pushTokenOnBack(token);
    }

    private removeLastToken(fullStaveName: string) {
        const stave = this.findStave(fullStaveName);
        stave.removeTokenOnBack();
    }

    private findStave(fullStaveName: string): StaveView {
        const [name, suffix] = this.splitFullStaveName(fullStaveName);
        const stave = this.codeView.findStave(name, suffix);
        if (stave === undefined) {
            throw `stave not found: ${fullStaveName}`;
        }
        return stave;
    }

    private splitFullStaveName(fullStaveName: string): [string, string] {
        const [name, suffix] = fullStaveName.split("::", 2);
        return [name, suffix || ""];
    }
}
