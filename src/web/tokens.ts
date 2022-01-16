import { v4 as uuid4 } from 'uuid';
import { tokens } from "../tokens";

export function renderTokens(isTemplate: boolean = true) {
    const container = document.getElementById("tokens");
    container.innerHTML = "";
    Object.keys(tokens).forEach(token => {
        container.appendChild(renderToken(token, isTemplate));
    });
}

export function renderToken(token: string, isTemplate: boolean = false): Element {
    const node = document.createElement("li");
    node.classList.add("token");
    node.setAttribute("draggable", "true");
    node.id = `token-${uuid4()}`;
    node.dataset.token = token;
    node.dataset.isTemplate = isTemplate ? "yes" : "no";
    //node.innerText = token;
    node.style.backgroundImage = `url(/icons/${token}.svg)`;
    setTokenEvents(node);
    return node;
}

function setTokenEvents(node: Element) {
    node.addEventListener('dragstart', evDragStart, false);
    node.addEventListener('dragend', evDragEnd, false);

    function evDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('token', this.dataset.token);
        e.dataTransfer.setData('id', this.id);
    }

    function evDragEnd(e) {
        /*
        items.forEach(function (item) {
          item.classList.remove('over');
        });
        */
    }
}
