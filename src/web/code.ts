import { renderToken } from "./tokens";

export function renderCode(code) {
    const container = document.getElementById("code");
    container.innerHTML = "";
    code.forEach(line => {
        container.appendChild(renderFunction(line));
    });
}

function renderFunction({name, tokens}): Element {
    const node = document.createElement("li");
    node.appendChild(renderName(name));
    node.appendChild(renderTokens(tokens));
    return node;
}

function renderName(name: string): Element {
    const node = document.createElement("span");
    node.innerText = name;
    return node;
}

function renderTokens(tokens): Element {
    const node = document.createElement("ul");
    node.classList.add("tokens");

    {
        const tokenSpanNode = renderTokenSpan();
        setTokenEvents2(tokenSpanNode);
        node.appendChild(tokenSpanNode);
    }

    tokens.forEach(token => {
        const tokenNode = renderToken(token);
        const tokenSpanNode = renderTokenSpan();

        setTokenEvents(tokenNode);
        setTokenEvents2(tokenSpanNode);
        node.appendChild(tokenNode);
        node.appendChild(tokenSpanNode);
    });
    return node;
}

function renderTokenSpan() {
    const node = document.createElement("li");
    node.classList.add("token-span");
    return node;
}

function setTokenEvents2(node: Element) {
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
        this.classList.remove('over');
        const token = e.dataTransfer.getData('token');
        const tokenNode = renderToken(token);
        this.insertAdjacentElement("afterend", tokenNode);
        return false;
    }

    function evDragEnter(e) {
        this.classList.add('over');
    }

    function evDragLeave(e) {
        this.classList.remove('over');
    }
}

function setTokenEvents(node: Element) {
    node.addEventListener('dragstart', evDragStart, false);
    node.addEventListener('dragend', evDragEnd, false);

    function evDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('token', this.dataset.token);
    }

    function evDragEnd(e) {
        /*
        items.forEach(function (item) {
          item.classList.remove('over');
        });
        */
    }
}

