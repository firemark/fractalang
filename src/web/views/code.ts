import { TokensStaveView } from './staveToken';
import { scrapeAndRun } from '../run';
import { PROCEDURES, DYNAMIC_ARGS, SUFFIXES } from '.../parser';

export function initCode(code) {
    const cb = () => {
        scrapeAndRun();
        return false;
    };

    renderCode(code);
    INPUTS.forEach(inputId => {
        const node = document.getElementById(inputId);
        node.addEventListener("change", cb, false);
    });

    renderListOfFunctions();
}

function renderListOfFunctions() {
    const functionsNode = document.getElementById("functions");
    PROCEDURES.concat(DYNAMIC_ARGS).forEach(name => {
        functionsNode.appendChild(renderBarOfFunctions(name));
    });
}

function renderBarOfFunctions(name: string) {
    const node = document.createElement("li");
    node.classList.add("dropdown");
    const baseFuncNode = renderAddFunction("span", name);
    const barNode = document.createElement("ul");
    barNode.classList.add("dropdown-content");
    SUFFIXES.forEach(suffix => {
        barNode.appendChild(renderAddFunction("li", name, suffix));
    });
    node.appendChild(baseFuncNode);
    node.appendChild(barNode);
    return node;
}

function renderAddFunction(type: string, name: string, suffix: string = "") {
    const node = document.createElement(type);
    const realName = suffix ? `SUFFIX_${suffix}` : `CALL_${name}`;
    node.style.backgroundImage = `url(${DEFAULT_ICON_URL}/${realName}.svg)`;
    node.classList.add("token-btn");
    node.dataset.name = name;
    node.dataset.suffix = suffix;
    node.addEventListener("click", function() {
        const {name, suffix} = this.dataset;
        showOrHideOrAddFunction(name, suffix);
        scrapeAndRun();
        return false;
    }, false);
    return node;
}

class CodeView extends View {
    private node: HTMLElement;
    private iconUrl: str;

    constructor({
        node: HTMLElement,
        iconUrl = DEFAULT_ICON_URL,
    }) {
        this.node = node;
        this.iconUrl = iconUrl;
    }

    renderStaves(staves: Stave): Element {
        const container = this.node.querySelector(".fract-staves");
        container.innerHTML = "";
        code.forEach({ name: StaveName } => {
            const [name, suffix] = staveName.split("::", 2);
            container.appendChild(this.renderStave({name, suffix}));
        });
        return code;
    }

    renderStave({
        name,
        suffix = "",
        tokens = [],
        isEditable = true,
    }): Element {
        const node = document.createElement("li");
        node.classList.add("stave");
        node.dataset.name = name;
        node.dataset.suffix = suffix;
        node.appendChild(this.renderName(name, suffix, {iconUrl}));
        node.appendChild(this.renderTokens(tokens, {isEditable, iconUrl}));
        return node;
    }

    renderName(name: string, suffix: string = {}): Element {
        const node = document.createElement("span");
        node.classList.add("name");
        const realname = suffix ? `${name}_${suffix}` : name;
        node.style.backgroundImage = `url(${this.iconUrl}/CALL_${realname}.svg)`;
        return node;
    }
}

function showOrHideOrAddFunction(name: string, suffix: string = ""): void {
    const codeNode = document.getElementById("code");
    const funcNode = codeNode.querySelector(`.stave[data-name="${name}"][data-suffix="${suffix}"]`);
    if (!funcNode) {
        codeNode.appendChild(renderStave({name, suffix, tokens: []}));
    } else {
        funcNode.classList.toggle("hide");
    }
}

function setTokenSpanEvents(node: Element, remove: boolean = false) {
    node.addEventListener('dragover', evDragOver, false);
    node.addEventListener('drop', evDrop, false);
    node.addEventListener('dragenter', evDragEnter, false);
    node.addEventListener('dragleave', evDragLeave, false);

    function evDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function evDrop(e) {
        if (e.stopPropagation) {
          e.stopPropagation(); // stops the browser from redirecting.
        }
        const token = e.dataTransfer.getData('token');
        const oldId = e.dataTransfer.getData('id');

        this.classList.remove('over');
        if (!remove) {
            this.insertAdjacentElement("afterend", renderTokenSpan());
            this.insertAdjacentElement("afterend", renderToken(token));
        }

        // todo
        const oldTokenNode = document.getElementById(oldId);
        if (oldTokenNode.dataset.isTemplate === "no") {
            oldTokenNode.nextSibling.remove();
            oldTokenNode.remove();
        }

        scrapeAndRun();
        return false;
    }

    function findSpan(node): HTMLElement {
        return node.classList.contains('token-span') ? node : node.nextSibling;
    }

    function evDragEnter(e) {
        findSpan(this).classList.add('over');
    }

    function evDragLeave(e) {
        findSpan(this).classList.remove('over');
    }
}


