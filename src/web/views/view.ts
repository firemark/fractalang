export class View {
    protected node: HTMLElement;

    constructor(node: HTMLElement) {
        this.node = node;
    }

    protected clear() {
        this.node.innerHTML = "";
    }

    protected createElement<K extends keyof HTMLElementTagNameMap>(params: {
        name: K;
        classes?: string[];
        text?: string;
    }): HTMLElementTagNameMap[K] {
        const node = document.createElement(params.name);
        if (params.classes) {
            node.classList.add(...params.classes);
        }
        if (params.text) {
            node.innerText = params.text;
        }

        return node;
    }
}
