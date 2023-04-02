import { View } from "./view";
import { Database } from "../database";
import { Project } from "../models";

interface Callbacks {
    onLoad: (project: Project) => void
    onRemove: (project: Project) => void
}

export class ProjectListDialogView extends View {
    #db: Database;
    #callbacks: Callbacks;

    constructor(dialogNode: HTMLElement, db: Database, callbacks: Callbacks) {
        super(dialogNode);
        this.#db = db;
        this.#callbacks = callbacks;
    }

    render() {
        {
            const headerNode = this.createElement({
                name: 'h1',
                text: 'Load project',
            });
            this.node.appendChild(headerNode);
        }
        {
            const tableNode = this.createElement({
                name: 'table',
                classes: ['projects'],
            });
            const tableBodyNode = this.createElement({ name: 'tbody' });
            const tableHeaderNode = this.createElement({ name: 'thead' });

            this.#db.list(project => {
                const rowNode = this.#renderRow(project);
                tableBodyNode.appendChild(rowNode);
            }, 10);

            tableHeaderNode.appendChild(this.#renderHeaderRow());
            tableNode.appendChild(tableHeaderNode);
            tableNode.appendChild(tableBodyNode);
            this.node.appendChild(tableNode);
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

        this.node.classList.add("project-list-dialog");
        this.node.addEventListener('close', this.#onClose.bind(this));
        (this.node as HTMLDialogElement).showModal();
    }

    #onClose() {
        this.node.remove();
    }

    #renderHeaderRow(): HTMLTableRowElement {
        const tableRowHeaderNode = this.createElement({ name: 'tr' });
        tableRowHeaderNode.appendChild(this.createElement({
            name: 'th',
            text: 'Title',
        }));
        tableRowHeaderNode.appendChild(this.createElement({
            name: 'th',
            text: 'Created',
        }));
        tableRowHeaderNode.appendChild(this.createElement({
            name: 'th',
            text: 'Updated',
        }));
        tableRowHeaderNode.appendChild(this.createElement({
            name: 'th',
            text: 'Actions',
        }));
        return tableRowHeaderNode;
    }

    #renderRow(project: Project): HTMLTableRowElement {
        const rowNode = this.createElement({ name: 'tr' });
        rowNode.dataset.title = project.title;

        {
            const titleRowNode = this.createElement({
                name: 'th',
                text: project.title,
            });
            rowNode.appendChild(titleRowNode);
        }
        {
            const updatedRowNode = this.createElement({
                name: 'td',
                text: project.updated.toISOString(),
            });
            rowNode.appendChild(updatedRowNode);
        }
        {
            const createdRowNode = this.createElement({
                name: 'td',
                text: project.created.toISOString(),
            });
            rowNode.appendChild(createdRowNode);
        }
        {
            const actionRowNode = this.createElement({
                name: 'td',
            });

            const loadNode = this.createElement({
                name: 'input',
            });
            loadNode.value = 'LOAD';
            loadNode.type = 'button';
            loadNode.onclick = () => {
                this.#db.get(project.title, project => this.#onLoad(project));
                return false;
            };

            const removeNode = this.createElement({
                name: 'input',
            });
            removeNode.value = 'REMOVE';
            removeNode.type = 'button';
            removeNode.onclick = () => {
                this.#db.remove(project.title, () => this.#onRemove(project));
                return false;
            };

            actionRowNode.appendChild(loadNode);
            actionRowNode.appendChild(removeNode);
            rowNode.appendChild(actionRowNode);
        }

        return rowNode;
    }

    #onLoad(project: Project) {
        this.#callbacks.onLoad(project);
        (this.node as HTMLDialogElement).close();
    }

    #onRemove(project: Project) {
        const query = `.projects > tbody > tr[data-title="${project.title}"]`;
        const node = this.node.querySelector(query);
        if (node !== undefined) {
            node.remove();
        }
        this.#callbacks.onRemove(project);
    }
}
