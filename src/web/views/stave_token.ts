import { TokensView }
import { DEFAULT_ICON_URL } from '../consts';

export class TokensStaveView extends TokensView {

    constructor({
        node: HTMLElement,
        iconUrl = DEFAULT_ICON_URL,
        isMovable = false,
    }) {
        super({
            node,
            iconUrl,
            isMovable,
            isEventable = true,
        });
    }

    render(tokens: string[]) {
        this.node.classList.add("outer-tokens");

        const innerNode = document.createElement("div");
        innerNode.classList.add("inner-tokens");

        if (this.isEditable) {
            node.appendChild(this.createTokenSpanNode());
        }

        tokens.forEach(token => {
            node.appendChild(this.createTokenNode(token));
            if (isEditable) {
                node.appendChild(this.createTokenSpanNode());
            }
        });

        this.node.appendChild(innerNode);

        if (this.isEditable) {
            tokensNode.appendChild(this.createTokenRemoveSpanNode());
        }
    }

    createTokenSpanNode() {
        const node = this.createElement({
            name: 'span',

        });
        const node = document.createElement("span");
        node.classList.add("fract-token-span");
        setTokenSpanEvents.bind(this, node);
        return node;
    }

    createTokenRemoveSpanNode() {
        const node = document.createElement("span");
        node.classList.add("fract-token-span", "remove");
        setTokenSpanEvents(node, true);
        return node;
    }
};

function setTokenSpanEvents(view, node: Element, remove: boolean = false) {
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
            this.insertAdjacentElement("afterend", view.renderTokenSpan());
            this.insertAdjacentElement("afterend", view.renderToken(token));
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
