import { Controller } from "./controller";
import { DebugController, State } from "./debug";

import { CodeView } from "@/web/views/code";
import { FunctionsBarView } from "@/web/views/functionsBar";
import { TokensCategoryView } from "@/web/views/categoryToken";
import { ImageView } from "@/web/views/image";
import { CodeBarView } from "@/web/views/codeBar";
import { ChooseTokenDialogView } from "@/web/views/chooseDialog";
import { ProjectListDialogView } from "@/web/views/projectListDialog";
import { SaveDialogView } from "@/web/views/saveDialog";
import { HelpDialogView } from "@/web/views/helpDialog";

import { createEmptyProject, Project, Stave } from "@/web/models";
import { ACTION_TOKENS, VALUE_TOKENS } from "@/web/tokensMenu";

import { exec, setupExec } from "@/core/exec";
import { Cursor } from "@/core/cursor";
import { StackStep } from "@/core/step";
import { Database } from "@/web/database";


export class MainController extends Controller {
    private database: Database;
    private imageView: ImageView;
    private codeView: CodeView;
    private functionsBarView: FunctionsBarView;
    private actionsCategoryView: TokensCategoryView;
    private valuesCategoryView: TokensCategoryView;
    private codeBarView: CodeBarView;
    private debug: DebugController;
    private chooseDialogView: ChooseTokenDialogView | null;
    private projectListDialogView: ProjectListDialogView | null;
    private saveDialogView: SaveDialogView | null;
    private helpDialogView: HelpDialogView;
    private project: Project;
    private isVisited: boolean;

    constructor(database: Database, project: Project) {
        super(document.querySelector("main"));
        this.database = database;
        this.project = project;
        this.debug = new DebugController({
            renderCb: (cursor: Cursor) => this.imageView.render(cursor),
            onState: this.onDebugState.bind(this),
        });
        this.helpDialogView = new HelpDialogView();
        this.imageView = new ImageView(this.node.querySelector(".fract-image"));
        this.codeView = new CodeView({
            node: this.node.querySelector(".fract-staves"),
            callbacks: {
                onDrop: this.onDrop.bind(this),
                onMove: this.onMove.bind(this),
                onDragTimeout: this.onDragTimeout.bind(this),
                canDrag: () => !this.debug.isDebug(),
            }
        });
        this.functionsBarView = new FunctionsBarView({
            node: this.node.querySelector(".fract-functions-list"),
            onSelect: (name: string, suffix: string) => {
                this.showOrHideOrAddFunction(name, suffix);
                this.scrapeAndRun();
            }
        });
        const categoryCallbacks = {
            onDrop: this.onDropFromCategory.bind(this),
            onMove: this.onMoveFromCategory.bind(this),
            onDragTimeout: null,
            canDrag: () => !this.debug.isDebug(),
        }
        this.actionsCategoryView = new TokensCategoryView({
            node: document.getElementById("action-tokens"),
            categories: ACTION_TOKENS,
            callbacks: categoryCallbacks,
        });
        this.valuesCategoryView = new TokensCategoryView({
            node: document.getElementById("value-tokens"),
            categories: VALUE_TOKENS,
            callbacks: categoryCallbacks,
        });
        this.codeBarView = new CodeBarView(document.getElementById("code-bar"), {
            onUpdate: (iterations, style) => {
                this.project.iterations = iterations;
                this.project.style = style;
                this.saveTempProject();
                this.scrapeAndRun();
            },
            onDebugStart: this.scrapeAndDebug.bind(this),
            onLoad: this.openProjectList.bind(this),
            onSave: this.openSaveDialog.bind(this),
            onNew: () => this.loadProject(createEmptyProject()),
            onHelp: () => this.helpDialogView.render(),
            onDebugStep: () => this.debug.step(),
            onDebugPlay: () => this.debug.play(),
            onDebugStop: () => this.debug.stop(),
            onDebugExit: () => this.debug.exit(),
        });
        this.chooseDialogView = null;
        this.projectListDialogView = null;
        this.saveDialogView = null;
        this.isVisited = localStorage.getItem("visited") !== null;
        localStorage.setItem("visited", new Date().toISOString());
    }

    render() {
        if (this.isVisited === false) {
            this.helpDialogView.render();
        }
        this.codeView.render(this.project.staves);
        this.functionsBarView.render();
        this.actionsCategoryView.render();
        this.valuesCategoryView.render();
        this.codeBarView.render(this.project);
        this.scrapeAndRun();
    }

    scrapeAndRun() {
        if (this.debug.isDebug()) {
            return;
        }
        const stack = this.scrape();

        if (stack === null) {
            return;
        }

        try {
            exec(stack);
        } catch (exception) {
            console.error(exception);
        }

        const { backgroundColor } = this.project.style;
        this.imageView.render(stack.cursor, {
            backgroundColor, 
            engine: "canvas", 
            scale: 3.0,
            margin: 10.0,
        });
    }

    scrapeAndSave() {
        this.project.staves = this.codeView.scrapeCode();
        this.saveTempProject();
        this.scrapeAndRun();
    }

    saveTempProject() {
        const cloneProject = {...this.project};
        cloneProject.id = "__temp__";
        this.database.update(cloneProject, project => {}); 
    }

    scrapeAndDebug() {
        if (this.debug.isDebug()) {
            return;
        }
        const stack = this.scrape();
        if (stack === null) {
            return;
        }
        this.codeBarView.setDebugMode();
        this.debug.init(stack);
    }

    private openProjectList() {
        const dialogNode = document.createElement('dialog');
        document.body.appendChild(dialogNode);
        this.projectListDialogView = new ProjectListDialogView(dialogNode, this.database, {
            onLoad: this.loadProject.bind(this),
            onRemove: () => {},
        });
        this.projectListDialogView.render();
    }

    private openSaveDialog() {
        const dialogNode = document.createElement('dialog');
        document.body.appendChild(dialogNode);
        this.saveDialogView = new SaveDialogView(dialogNode, this.database,  this.project, {
            onSave: project => {},
        });
        this.saveDialogView.render();
    }

    private loadProject(project: Project) {
        this.project = project;
        this.saveTempProject();
        this.debug.exit();
        this.codeView.render(this.project.staves);
        this.codeBarView.render(this.project);
        this.scrapeAndRun();
    }

    private scrape(): StackStep | null {
        const style = this.project.style;
        const cursorCfg = {
            firstColor: style.firstColor,
            secondColor: style.secondColor,
            strokeSize: style.strokeSize,
        };
        const cursor = new Cursor(cursorCfg);
        const argument = 1.0;
        const maxIteration = this.project.iterations;
        const code = this.codeView.scrapeCode();

        try {
            return setupExec(argument, maxIteration, code, cursor);
        } catch (exception) {
            console.error(exception);
            return null;
        }
    }

    private onDebugState(previousState: State | null, state: State) {
        if (state.debug === false) {
            this.codeBarView.unsetDebugMode();
        }
        if (previousState !== null) {
            const [name, suffix = ""] = previousState.stave.split("::");
            const stave = this.codeView.findStave(name, suffix);
            stave && stave.removeFlagOnActionToken('debug', previousState.actionIndex);
        }
        {
            const [name, suffix = ""] = state.stave.split("::");
            const stave = this.codeView.findStave(name, suffix);
            stave && stave.addFlagOnActionToken('debug', state.actionIndex);
        }
    }

    private onDrop(dragNode: HTMLElement, overNode: HTMLElement) {
        const findStave = dataset => this.codeView.findStave(dataset.name, dataset.suffix);
        const prevStaveView = findStave(dragNode.dataset);

        if (overNode.classList.contains("fract-staves")) { // REMOVE
            const indexToRemove = parseInt(dragNode.dataset.index);
            prevStaveView.removeToken(indexToRemove);
        }

        if (overNode.classList.contains("fract-token-span")) {  // ADD/MOVE
            const indexToMove = parseInt(dragNode.dataset.index);
            const goalIndex = parseInt(overNode.dataset.index);
            const goalStaveView = findStave(overNode.dataset);
            const shift = Object.is(prevStaveView, goalStaveView) && goalIndex <= indexToMove ? 1 : 0;

            goalStaveView.pushTokenAfter(dragNode.dataset.token, goalIndex);
            prevStaveView.removeToken(indexToMove + shift);
        }

        this.scrapeAndSave();
    }

    private onDropFromCategory(dragNode: HTMLElement, overNode: HTMLElement) {
        const findStave = dataset => this.codeView.findStave(dataset.name, dataset.suffix);

        if (overNode.classList.contains("fract-token-span")) {  // ADD/MOVE
            const goalIndex = parseInt(overNode.dataset.index);
            const goalStaveView = findStave(overNode.dataset);

            goalStaveView.pushTokenAfter(dragNode.dataset.token, goalIndex);
        }

        this.scrapeAndSave();
    }

    private onMove(dragNode: HTMLElement, oldOverNode: HTMLElement | null, newOverNode: HTMLElement | null) {
        if (oldOverNode) {
            const isClass = key => oldOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                oldOverNode.classList.remove("over");
                dragNode.classList.remove("valid-drop");
            } else if (isClass("fract-staves")) {
                dragNode.classList.remove("remove-drop");
            }
        }
        if (newOverNode) {
            const isClass = key => newOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                const currentStave = `${dragNode.dataset.name}::${dragNode.dataset.suffix || ""}`;
                const goalStave = `${newOverNode.dataset.name}::${newOverNode.dataset.suffix || ""}`;
                const currentIndex = parseInt(dragNode.dataset.index);
                const goalIndex = parseInt(newOverNode.dataset.index);
                if (currentStave == goalStave && (currentIndex == goalIndex || currentIndex == goalIndex - 1)) {
                    return;
                }
                newOverNode.classList.add("over");
                dragNode.classList.add("valid-drop")
            } else if (isClass("fract-staves")) {
                dragNode.classList.add("remove-drop");
            }
        }
    }

    private onMoveFromCategory(dragNode: HTMLElement, oldOverNode: HTMLElement | null, newOverNode: HTMLElement | null) {
        if (oldOverNode) {
            const isClass = key => oldOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                oldOverNode.classList.remove("over");
                dragNode.classList.remove("valid-drop");
            }
        }
        if (newOverNode) {
            const isClass = key => newOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                newOverNode.classList.add("over");
                dragNode.classList.add("valid-drop")
            }
        }
    }

    protected onDragTimeout(tokenNode: HTMLElement): boolean {
        const dialogNode = document.createElement('dialog');
        document.body.appendChild(dialogNode);
        this.chooseDialogView = new ChooseTokenDialogView(dialogNode, tokenNode, this.onSelectTokenFromDialog.bind(this));
        this.chooseDialogView.render();
        return true;
    }

    private onSelectTokenFromDialog({token, name, suffix, index}) {
        const staveView = this.codeView.findStave(name, suffix);
        staveView.replaceToken(token, index);
        this.scrapeAndSave();
        this.chooseDialogView = null;
    }

    private showOrHideOrAddFunction(name: string, suffix: string = ""): void {
        const staveView = this.codeView.findStave(name, suffix);
        if (staveView) {
            staveView.showOrHide();
        } else {
            this.codeView.addStave({ name, suffix, tokens: [] });
        }
        this.scrapeAndSave();
    }
}
