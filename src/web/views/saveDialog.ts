import { View } from "./view";
import { Database } from "../database";
import { Project } from "../models";

import { encodeStaves } from "@/core/shortcuts"

import { toCanvas } from "qrcode";

interface Callbacks {
    onSave: (project: Project) => void
}

export class SaveDialogView extends View<HTMLDialogElement> {
    #db: Database;
    #callbacks: Callbacks;
    #project: Project;

    constructor(dialogNode: HTMLDialogElement, db: Database, project: Project, callbacks: Callbacks) {
        super(dialogNode);
        this.#db = db;
        this.#callbacks = callbacks;
        this.#project = project;
    }

    render() {
        this.node.appendChild(this.#renderSaveSection());
        this.node.appendChild(this.createElement({ name: 'hr' }));
        this.node.appendChild(this.#renderShareSection());
        this.node.appendChild(this.createElement({ name: 'hr' }));
        this.node.appendChild(this.#renderFooter());

        this.node.classList.add("save-dialog");
        this.node.addEventListener('close', this.#onClose.bind(this));
        this.node.showModal();
    }

    #renderSaveSection(): HTMLDivElement {
        const node = this.createElement({ name: 'div' });
        node.appendChild(
            this.createElement({
                name: 'h2',
                text: 'Save project',
            })
        );
        node.appendChild(
            this.createElement({
                name: 'label',
                text: 'Title: ',
            })
        );
        {
            const titleNode = this.createElement({
                name: 'input',
                type: 'text',
                text: this.#project.title,
            });
            titleNode.onchange = () => {
                const title = titleNode.value;
                const clearTitle = title.replace(/[_\s]+/, ' ').trim();
                this.#project.title = clearTitle;
                this.#project.id = clearTitle;
                titleNode.value = clearTitle;
                return false;
            }
            node.appendChild(titleNode);
        }

        node.appendChild(this.createElement({
            name: 'input',
            type: 'button',
            text: 'SAVE',
            onclick: () => {
                this.#project.updated = new Date();
                this.#db.update(this.#project, (project: Project) => this.#onSave(project));
                return false;
            }
        }));

        return node;
    }

    #renderShareSection(): HTMLDivElement {
        const path = `${location.protocol}//${location.host}${location.pathname}`;
        const shareLink = `${path}?${this.#getURLParams().toString()}`;
        const node = this.createElement({ name: 'div' });

        node.appendChild(
            this.createElement({
                name: 'h2',
                text: 'Share project',
            })
        );

        node.appendChild(
            this.createElement({
                name: 'label',
                text: 'Link to share: ',
            })
        );

        node.appendChild(this.createElement({ 
            name: 'input', 
            type: 'text',
            text: shareLink,
            readonly: true,
        }));

        node.appendChild(this.createElement({ name: "br" }));

        node.appendChild(this.createElement({ 
            name: 'input', 
            type: 'button',
            text: 'Copy to clipboard',
            onclick: () => window.navigator.clipboard.writeText(shareLink),
        }));

        node.appendChild(
            this.createElement({
                name: 'h3',
                text: '… or copy QR code',
            })
        );

        {
            const canvasNode = this.createElement({ name: "canvas"});
            toCanvas(canvasNode, shareLink);
            node.appendChild(canvasNode);
        }

        return node;
    }

    #renderFooter(): HTMLDivElement {
        const node = this.createElement({ name: 'div' });
        node.appendChild(
            this.createElement({
                name: 'input',
                type: 'button',
                text: 'CLOSE',
                onclick: () => this.node.close(),
            })
        );

        return node;
    }

    #onClose() {
        this.node.remove();
    }

    #onSave(project: Project) {
        this.#callbacks.onSave(project);
        this.node.close();
    }

    #getURLParams(): URLSearchParams {
        const params = new URLSearchParams();
        encodeStaves(this.#project.staves)
            .forEach(([name, tokens]) => {
                params.append(name, tokens);
            });

        params.append("z", "z");
        params.append("t", this.#project.title);
        params.append("i", this.#project.iterations.toFixed());
        params.append("c1", this.#project.style.firstColor);
        params.append("c2", this.#project.style.secondColor);
        params.append("b", this.#project.style.backgroundColor);
        params.append("s", this.#project.style.strokeSize.toFixed(2));

        return params;
    }

}
