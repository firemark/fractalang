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
    tokens.forEach(token => {
        node.appendChild(renderToken(token));
    });
    return node;
}
