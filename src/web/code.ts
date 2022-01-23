import { renderToken } from './tokens';
import { scrapeAndRun } from './run';
import { PROCEDURES, DYNAMIC_ARGS } from '../parser';

export function initCode(code) {
    renderCode(code);
    document.getElementById("iterations").addEventListener("change", () => {
        scrapeAndRun();
        return false;
    }, false);

    renderListOfFunctions();
}

function renderListOfFunctions() {
    const functionsNode = document.getElementById("functions");
    PROCEDURES.concat(DYNAMIC_ARGS).forEach(name => {
        const node = document.createElement("li");
        node.style.backgroundImage = `url(/icons/CALL_${name}.svg)`;
        node.dataset.name = name;
        node.addEventListener("click", function() {
            showOrHideOrAddFunction(this.dataset.name);
            scrapeAndRun();
            return false;
        }, false);
        functionsNode.appendChild(node);
    });
}

function renderCode(code) {
    const container = document.getElementById("code");
    container.innerHTML = "";
    code.forEach(line => {
        container.appendChild(renderFunction(line));
    });
}

function renderFunction({name, tokens}): Element {
    const node = document.createElement("li");
    node.classList.add("function");
    node.dataset.name = name;
    node.appendChild(renderName(name));
    node.appendChild(renderTokens(tokens));
    return node;
}

function showOrHideOrAddFunction(name: string): void {
    const codeNode = document.getElementById("code");
    const funcNode = codeNode.querySelector(`.function[data-name=${name}]`);
    if (!funcNode) {
        codeNode.appendChild(renderFunction({name, tokens: []}));
    } else {
        funcNode.classList.toggle("hide");
    }
}

function renderName(name: string): Element {
    const node = document.createElement("span");
    node.classList.add("name");
    node.style.backgroundImage = `url(/icons/CALL_${name}.svg)`;
    return node;
}

function renderTokens(tokens): Element {
    const tokensNode = document.createElement("div");
    tokensNode.classList.add("outer-tokens");

    const node = document.createElement("div");
    node.classList.add("inner-tokens");
    node.appendChild(renderTokenSpan());
    tokens.forEach(token => {
        node.appendChild(renderToken(token));
        node.appendChild(renderTokenSpan());
    });

    tokensNode.appendChild(node);
    tokensNode.appendChild(renderTokenRemoveSpan());

    return tokensNode;
}

function renderTokenSpan() {
    const node = document.createElement("span");
    node.classList.add("token-span");
    setTokenSpanEvents(node);
    return node;
}

function renderTokenRemoveSpan() {
    const node = document.createElement("span");
    node.classList.add("token-span", "remove");
    setTokenSpanEvents(node, true);
    return node;
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


