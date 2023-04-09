export class View<HTMLType extends HTMLElement = HTMLElement> {
    protected node: HTMLType;

    constructor(node: HTMLType) {
        this.node = node;
    }

    protected clear() {
        this.node.innerHTML = "";
    }

    protected createElement<K extends keyof HTMLElementTagNameMap>(params: {
        name: K;
        classes?: string[];
        text?: string;
        type?: string;
        onclick?: (MouseEvent) => void;
        readonly?: boolean;
    }): HTMLElementTagNameMap[K] {
        const node = document.createElement(params.name);
        if (params.classes) {
            node.classList.add(...params.classes);
        }

        if (params.onclick) {
            node.onclick = event => {
                try {
                    params.onclick(event);
                } finally {
                    return false;
                }
            };
        }

        if (node instanceof HTMLInputElement) {
            if (params.type) {
                node.type = params.type;
            }
            if (params.text) {
                node.value = params.text;
            }
            if (params.readonly) {
                node.readOnly = params.readonly;
            }
        } else {
            if (params.text) {
                node.innerText = params.text;
            }
        }

        return node;
    }
}
