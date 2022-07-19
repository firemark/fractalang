import { View } from './view';
import { TokensStaveView } from './staveToken';
import { DEFAULT_ICON_URL } from '@/web/consts';

import { PROCEDURES, DYNAMIC_ARGS, SUFFIXES } from '@/core/parser';


export class FunctionsBarView extends View {
    private iconUrl: string;
    private onSelect: (name: string, suffix: string) => void;

    constructor({node, onSelect, iconUrl = DEFAULT_ICON_URL}) {
        super(node);
        this.iconUrl = iconUrl;
        this.onSelect = onSelect;
    }

    render() {
        PROCEDURES.concat(DYNAMIC_ARGS).forEach(name => {
            this.node.appendChild(this.createBarOfFunctionsNode(name));
        });
    }

    private createBarOfFunctionsNode(name: string) {
        const node = this.createElement({ name: "li", classes: ["dropdown"] });
        const baseFuncNode = this.createAddFunctionNode("span", name);
        const barNode = this.createElement({ name : "ul", classes: ["dropdown-content"] });
        barNode.classList.add("dropdown-content");
        SUFFIXES.forEach(suffix => {
            barNode.appendChild(this.createAddFunctionNode("li", name, suffix));
        });
        node.appendChild(baseFuncNode);
        node.appendChild(barNode);
        return node;
    }

    private createAddFunctionNode(type: string, name: string, suffix: string = "") : Node {
        const node = document.createElement(type);
        const realName = suffix ? `SUFFIX_${suffix}` : `CALL_${name}`;
        node.style.backgroundImage = `url(${this.iconUrl}/${realName}.svg)`;
        node.classList.add("token-btn");
        node.dataset.name = name;
        node.dataset.suffix = suffix;
        node.addEventListener("click", () => {
            const {name, suffix} = node.dataset;
            this.onSelect(name, suffix);
            return false;
        }, false);
        return node;
    }
}
