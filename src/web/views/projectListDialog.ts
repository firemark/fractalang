import { View } from "./view";
import { Database } from "../database";
import { Project } from "../models";

export class ProjectListDialogView extends View {
    #db: Database;

    constructor(dialogNode: HTMLElement, db: Database) {
        super(dialogNode);
        this.#db = db;
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
                this.onClose();
                return false;
            }
            this.node.appendChild(closeNode);
        }

        this.node.classList.add("project-list-dialog");
        this.node.addEventListener('close', this.onClose.bind(this));
        (this.node as HTMLDialogElement).showModal();
    }

    onClose() {
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

            const removeNode = this.createElement({
                name: 'input',
            });
            removeNode.value = 'REMOVE';
            removeNode.type = 'button';

            actionRowNode.appendChild(loadNode);
            actionRowNode.appendChild(removeNode);
            rowNode.appendChild(actionRowNode);
        }

        return rowNode;
    }
}
