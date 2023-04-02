import { View } from "./view";
import { Database } from "../database";
import { Project } from "../models";

interface Callbacks {
    onSave: (project: Project) => void
}

export class SaveDialogView extends View {
    #db: Database;
    #callbacks: Callbacks;
    #project: Project;

    constructor(dialogNode: HTMLElement, db: Database, project: Project, callbacks: Callbacks) {
        super(dialogNode);
        this.#db = db;
        this.#callbacks = callbacks;
        this.#project = project;
    }

    render() {
        {
            const headerNode = this.createElement({
                name: 'h1',
                text: 'Save project',
            });
            this.node.appendChild(headerNode);
        }
        {
            const titleNode = this.createElement({ name: 'input' })
            titleNode.value = this.#project.title;
            titleNode.type = 'text';
            titleNode.onchange = event => {
                const title = (event.target as HTMLInputElement).value;
                const clearTitle = title.replace(/[_\s]+/, ' ').trim();
                this.#project.title = clearTitle;
                (event.target as HTMLInputElement).value = clearTitle;
                return false;
            }
            this.node.appendChild(titleNode);
        }
        {
            const saveNode = this.createElement({ name: 'input' })
            saveNode.value = 'SAVE';
            saveNode.type = 'button';
            saveNode.onclick = () => {
                this.#project.updated = new Date();
                this.#db.update(this.#project, (project: Project) => this.#onSave(project));
                return false;
            }
            this.node.appendChild(saveNode);
        }
        {
            const closeNode = this.createElement({ name: 'input' })
            closeNode.value = 'CLOSE';
            closeNode.type = 'button';
            closeNode.onclick = () => {
                (this.node as HTMLDialogElement).close();
                return false;
            }
            this.node.appendChild(closeNode);
        }

        this.node.classList.add("save-dialog");
        this.node.addEventListener('close', this.#onClose.bind(this));
        (this.node as HTMLDialogElement).showModal();
    }

    #onClose() {
        this.node.remove();
    }

    #onSave(project: Project) {
        this.#callbacks.onSave(project);
        (this.node as HTMLDialogElement).close();
    }

}
