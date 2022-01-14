import { tokens } from "../tokens";

export function renderTokens() {
    const container = document.getElementById("tokens");
    container.innerHTML = "";
    Object.keys(tokens).forEach(token => {

        container.appendChild(renderToken(token));
    });
}

export function renderToken(token): Element {
    const node = document.createElement("li");
    node.classList.add("token");
    node.setAttribute("draggable", "true");
    node.dataset.token = token;
    node.innerText = token;
    return node;
}
