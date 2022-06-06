import { TokensView } from './token';
import { Stave } from '../models';
import { DEFAULT_ICON_URL } from '../consts';

export class TokensStaveView extends TokensView {
    private onDrop: () => void;

    constructor({
        node,
        onDrop,
        iconUrl = DEFAULT_ICON_URL,
        isMovable = false,
    }) {
        super({
            node,
            iconUrl,
            isMovable,
            isEditable: true,
        });
        this.onDrop = onDrop;
    }

    render(tokens: string[]) {
        this.node.classList.add("outer-tokens");

        const innerNode = document.createElement("div");
        innerNode.classList.add("inner-tokens");

        if (this.isEditable) {
            innerNode.appendChild(this.createTokenSpanNode());
        }

        tokens.forEach(token => {
            innerNode.appendChild(this.createTokenNode(token));
            if (this.isEditable) {
                innerNode.appendChild(this.createTokenSpanNode());
            }
        });

        this.node.appendChild(innerNode);

        if (this.isEditable) {
            this.node.appendChild(this.createTokenRemoveSpanNode());
        }
    }

    protected createTokenSpanNode() {
        const node = this.createElement({
            name: 'span',
            classes: ["fract-token-span"],
        });
        setTokenSpanEvents(this, node, this.onDrop);
        return node;
    }

    protected createTokenRemoveSpanNode() {
        const node = document.createElement("span");
        node.classList.add("fract-token-span", "remove");
        setTokenSpanEvents(this, node, this.onDrop, true);
        return node;
    }

    scrape(): Stave {
        const {name, suffix} = this.node.dataset;
        const tokens: string[] = [];
        this.node.querySelectorAll(".fract-token").forEach(tokenNode => {
            tokens.push((tokenNode as HTMLElement).dataset.token);
        });
        const realname = suffix ? `${name}::${suffix}` : name;
        return {name: realname, tokens};
    }

};

function setTokenSpanEvents(view, node: Element, onDrop: () => void, remove: boolean = false) {
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
        if (oldTokenNode.dataset.isMovable === "no") {
            oldTokenNode.nextSibling.remove();
            oldTokenNode.remove();
        }

        onDrop();
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
