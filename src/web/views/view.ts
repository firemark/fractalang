export class View {
    protected node: HTMLElement;

    constructor(node) {
        this.node = node;
    }

    protected clear() {
        this.node.innerHTML = "";
    }

    protected createElement({name: string, classes: string[] = [], text?: string}): HTMLElement {
        const node = document.createElement(name);
        tokenLabel.classList.add(classes...);
        if (text !== undefined) {
            node.innerText = text;
        }

        return node;
    }
}
