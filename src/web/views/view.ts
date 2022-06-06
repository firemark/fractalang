export class View {
    protected node: HTMLElement;

    constructor(node) {
        this.node = node;
    }

    protected clear() {
        this.node.innerHTML = "";
    }

    protected createElement(params: {
        name: string;
        classes?: string[];
        text?: string;
    }): HTMLElement {
        const node = document.createElement(params.name) as HTMLElement;
        if (params.classes) {
            node.classList.add(...params.classes);
        }
        if (params.text) {
            node.innerText = params.text;
        }

        return node;
    }
}
