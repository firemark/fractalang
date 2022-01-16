import { renderToken } from "./tokens";
import { run, scrapeCode } from './run';

export function renderCode(code) {
    const container = document.getElementById("code");
    container.innerHTML = "";
    code.forEach(line => {
        container.appendChild(renderFunction(line));
    });
}

function renderFunction({name, tokens}): Element {
    const node = document.createElement("li");
    node.classList.add("function");
    node.appendChild(renderName(name));
    node.appendChild(renderTokens(tokens));
    return node;
}

function renderName(name: string): Element {
    const node = document.createElement("span");
    node.classList.add("name");
    node.innerText = name;
    return node;
}

function renderTokens(tokens): Element {
    const node = document.createElement("ul");
    node.classList.add("tokens");
node.appendChild(renderTokenSpan());
    tokens.forEach(token => {
        const tokenNode = renderToken(token);
        //setTokenSpanEvents(tokenNode);
        node.appendChild(tokenNode);
        node.appendChild(renderTokenSpan());
    });

    return node;
}

function renderTokenSpan() {
    const node = document.createElement("li");
    node.classList.add("token-span");
    setTokenSpanEvents(node);
    return node;
}

function setTokenSpanEvents(node: Element) {
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
        this.insertAdjacentElement("afterend", renderTokenSpan());
        this.insertAdjacentElement("afterend", renderToken(token));

        // todo
        const oldTokenNode = document.getElementById(oldId);
        if (oldTokenNode.dataset.isTemplate === "no") {
            oldTokenNode.nextSibling.remove();
            oldTokenNode.remove();
        }

        run(scrapeCode());

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


