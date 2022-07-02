import { View } from "./view";

export class CodeBarView extends View {
    private onUpdate: (Object) => void;

    constructor({node, onUpdate}: {node: HTMLElement, onUpdate: () => void}) {
        super(node);
        this.onUpdate = onUpdate;
    }

    render() {
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "iterations";
            labelNode.innerHTML = "Iterations:&nbsp;";
            node.name = "iterations";
            node.type = "number";
            node.value = "3";
            node.min = "1";
            node.max = "30";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "first-color";
            labelNode.innerHTML = "First color:&nbsp;";
            node.name = "first-color";
            node.type = "color";
            node.value = '#000000';
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "second-color";
            labelNode.innerHTML = "Second color:&nbsp;";
            node.name = "second-color";
            node.type = "color";
            node.value = '#FF0000';
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "stroke-size";
            labelNode.innerHTML = "Stroke size:&nbsp;";
            node.name = "stroke-size";
            node.type = "number";
            node.value = "1";
            node.min = "0.5";
            node.max = "3";
            node.step = "0.25";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
    }

    getData() {
        const data = {};
        this.node.querySelectorAll('input').forEach(node => {
            switch(node.type) {
                case "number":
                    data[node.name] = parseFloat(node.value);
                break;
                default:
                    data[node.name] = node.value;
                break;
            }
        });
        return data;
    }

    private onChange() {
        this.onUpdate(this.getData());
    }

    private findInput(name: string): HTMLInputElement {
        return this.node.querySelector(`[name='${name}']`);
    }
}
