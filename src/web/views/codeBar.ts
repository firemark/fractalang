import { Project, ProjectStyle } from "../models";
import { View } from "./view";

type OnUpdateCb = (iterations: number, style: ProjectStyle) => void;
type Cb = () => void;
interface Callbacks {
    onUpdate: OnUpdateCb,
    onDebugStart: Cb,
    onLoad: Cb,
    onSave: Cb,
    onNew: Cb,
    onDebugStep: Cb,
    onDebugPlay: Cb,
    onDebugStop: Cb,
    onDebugExit: Cb,
};

export class CodeBarView extends View {
    #callbacks: Callbacks;

    constructor(node: HTMLElement, callbacks: Callbacks) {
        super(node);
        this.#callbacks = callbacks;
    }

    render(project: Project) {
        this.clear();
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "iterations";
            labelNode.innerHTML = "Iterations:&nbsp;";
            node.name = "iterations";
            node.type = "number";
            node.value = project.iterations.toFixed();
            node.min = "1";
            node.max = "30";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "first-color";
            labelNode.innerHTML = "First color:&nbsp;";
            node.name = "first-color";
            node.type = "color";
            node.value = project.style.firstColor || "#000000";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "second-color";
            labelNode.innerHTML = "Second color:&nbsp;";
            node.name = "second-color";
            node.type = "color";
            node.value = project.style.secondColor || "#FF0000";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "background-color";
            labelNode.innerHTML = "Backround color:&nbsp;";
            node.name = "background-color";
            node.type = "color";
            node.value = project.style.backgroundColor || "#FFFFFF";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "stroke-size";
            labelNode.innerHTML = "Stroke size:&nbsp;";
            node.name = "stroke-size";
            node.type = "number";
            node.value = (project.style.strokeSize || 1).toFixed(2);
            node.min = "0.5";
            node.max = "3";
            node.step = "0.25";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const hideNode = this.createElement({ name: "input" });
            const showNode = this.createElement({ name: "input", classes: ["hidden"] });
            showNode.value = "SHOW";
            showNode.type = "button";
            showNode.onclick = () => {
                showNode.classList.add("hidden");
                hideNode.classList.remove("hidden");
                document.getElementById("code-panel").classList.remove("hidden");
                return false;
            };
            hideNode.value = "HIDE";
            hideNode.type = "button";
            hideNode.onclick = () => {
                hideNode.classList.add("hidden");
                showNode.classList.remove("hidden");
                document.getElementById("code-panel").classList.add("hidden");
                return false;
            };
            this.node.appendChild(showNode);
            this.node.appendChild(hideNode);
        }
        {
            const node = this.createElement({ name: "input" });
            node.value = "LOAD";
            node.type = "button";
            node.onclick = () => {
                this.#callbacks.onLoad();
                return false;
            };
            this.node.appendChild(node);
        }
        {
            const node = this.createElement({ name: "input" });
            node.value = "SAVE";
            node.type = "button";
            node.onclick = () => {
                this.#callbacks.onSave();
                return false;
            };
            this.node.appendChild(node);
        }
        {
            const node = this.createElement({ name: "input" });
            node.value = "NEW";
            node.type = "button";
            node.onclick = () => {
                this.#callbacks.onNew();
                return false;
            };
            this.node.appendChild(node);
        }
        {
            const btnNode = this.createElement({ name: "input" });
            btnNode.name = "debug-start";
            btnNode.value = "DEBUG";
            btnNode.type = "button";
            btnNode.onclick = () => {
                this.#callbacks.onDebugStart();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-step";
            btnNode.value = "STEP";
            btnNode.type = "button";
            btnNode.onclick = () => {
                this.#callbacks.onDebugStep();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-play";
            btnNode.value = "PLAY";
            btnNode.type = "button";
            btnNode.onclick = () => {
                this.#callbacks.onDebugPlay();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-stop";
            btnNode.value = "STOP";
            btnNode.type = "button";
            btnNode.onclick = () => {
                this.#callbacks.onDebugStop();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-exit";
            btnNode.value = "EXIT";
            btnNode.type = "button";
            btnNode.onclick = () => {
                this.#callbacks.onDebugExit();
                return false;
            };
            this.node.appendChild(btnNode);
        }
    }

    getStyle(): ProjectStyle {
        const getValue = (name: string, defaultValue: string) => {
            const node = this.node.querySelector(`input[name="${name}"]`) as HTMLInputElement;
            return node === undefined ? defaultValue : node.value;
        }

        return {
            firstColor: getValue("first-color", "black"),
            secondColor: getValue("second-color", "red"),
            backgroundColor: getValue("background-color", "white"),
            strokeSize: parseFloat(getValue("stroke-size", "1")),
        }
    }

    setDebugMode() {
        this.findInput('debug-start').classList.add('hidden');
        this.findInput('debug-step').classList.remove('hidden');
        this.findInput('debug-play').classList.remove('hidden');
        this.findInput('debug-stop').classList.remove('hidden');
        this.findInput('debug-exit').classList.remove('hidden');
    }

    unsetDebugMode() {
        this.findInput('debug-start').classList.remove('hidden');
        this.findInput('debug-step').classList.add('hidden');
        this.findInput('debug-play').classList.add('hidden');
        this.findInput('debug-stop').classList.add('hidden');
        this.findInput('debug-exit').classList.add('hidden');
    }

    private onChange() {
        const node = this.node.querySelector('input[name="iterations"]') as HTMLInputElement;
        const iterations = node === undefined ? 3 : parseInt(node.value);

        this.#callbacks.onUpdate(iterations, this.getStyle());
    }

    private findInput(name: string): HTMLInputElement {
        return this.node.querySelector(`[name='${name}']`);
    }
}
