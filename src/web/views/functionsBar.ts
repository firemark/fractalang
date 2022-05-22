import { TokensStaveView } from './staveToken';
import { scrapeAndRun } from '../run';
import { PROCEDURES, DYNAMIC_ARGS, SUFFIXES } from '.../parser';


class FunctionsBarView extends View {

    constructor({
        node: HTMLElement,
        iconUrl = DEFAULT_ICON_URL,
        showOrHideOrAddStaveCallback,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.showOrHideOrAddStaveCallback = showOrHideOrAddStaveCallback;
    }

    render() {
        PROCEDURES.concat(DYNAMIC_ARGS).forEach(name => {
            this.node.appendChild(this.createBarOfFunctionsNode(name));
        });
    }

    createBarOfFunctionsNode(name: string) {
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

    createAddFunctionNode(type: string, name: string, suffix: string = "") : Node {
        const { showOrHideOrAddStaveCallback } = this;
        const node = document.createElement(type);
        const realName = suffix ? `SUFFIX_${suffix}` : `CALL_${name}`;
        node.style.backgroundImage = `url(${this.iconUrl}/${realName}.svg)`;
        node.classList.add("token-btn");
        node.dataset.name = name;
        node.dataset.suffix = suffix;
        node.addEventListener("click", function() {
            const {name, suffix} = this.dataset;
            showOrHideOrAddStaveCallback(name, suffix);
            scrapeAndRun();
            return false;
        }, false);
        return node;
    }
}
