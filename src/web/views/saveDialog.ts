import { View } from "./view";
import { Database } from "@/web/database";
import { Project } from "@/web/models";
import { encodeProjectToUrlParams } from "@/web/urlParams";

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
        const shareLink = this.#createShareLink();
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

    #createShareLink(): string {
        const path = `${location.protocol}//${location.host}${location.pathname}`;
        const params = encodeProjectToUrlParams(this.#project);
        return `${path}?${params.toString()}`;
    }
}
