import { View } from "./view";
import { Database } from "../database";

export class ProjectListDialogView extends View {
    #db: Database;

    constructor(dialogNode: HTMLElement, db: Database) {
        super(dialogNode);
        this.#db = db;
    }

    render() {
        {
            const listNode = this.createElement({
                name: 'li',
                classes: ['projects'],
            });

            this.#db.list(title => {
                const itemNode = this.createElement({
                    name: 'ul',
                    classes: ['project'],
                });
                itemNode.textContent = title;
                listNode.appendChild(itemNode);
            })

            this.node.appendChild(listNode);
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
}
