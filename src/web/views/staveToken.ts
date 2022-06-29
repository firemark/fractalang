import { TokensView } from './token';
import { Stave } from '../models';
import { DEFAULT_ICON_URL } from '../consts';

export class TokensStaveView extends TokensView {
    private onDrop: () => void;

    constructor({
        node,
        onDrop,
        iconUrl = DEFAULT_ICON_URL,
        isDraggable = false,
    }) {
        super({
            node,
            iconUrl,
            isDraggable,
        });
        this.onDrop = onDrop;
    }

    render(tokens: string[]) {
        this.node.classList.add("outer-tokens");

        const innerNode = document.createElement("div");
        innerNode.classList.add("inner-tokens");

        if (this.isDraggable) {
            innerNode.appendChild(this.createTokenSpanNode());
        }

        tokens.forEach(this.pushToken.bind(this, innerNode));

        this.node.appendChild(innerNode);

        if (this.isDraggable) {
            this.node.appendChild(this.createTokenRemoveSpanNode());
        }
    }

    pushTokenOnBack(token: string) {
        this.pushToken(this.getInnerNode(), token);
    }

    removeTokenOnBack() {
        const innerNode = this.getInnerNode();
        if (innerNode.lastChild) {
          innerNode.lastChild.remove();
        }
    }

    private getInnerNode(): HTMLElement {
        return this.node.querySelector('.inner-tokens');
    }

    private pushToken(innerNode: HTMLElement, token: string) {
        innerNode.appendChild(this.createTokenNode(token));
        if (this.isDraggable) {
            innerNode.appendChild(this.createTokenSpanNode());
        }
    }

    protected createTokenNode(token: string): HTMLElement {
        const node = super.createTokenNode(token);
        node.dataset.isEditable = this.isDraggable ? 'yes' : 'no';
        return node;
    }

    scrapeTokens(): string[] {
        const tokens: string[] = [];
        this.node.querySelectorAll(".fract-token").forEach(tokenNode => {
            tokens.push((tokenNode as HTMLElement).dataset.token);
        });
        return tokens;
    }

    protected createTokenSpanNode() {
        const node = this.createElement({
            name: 'span',
            classes: ["fract-token-span"],
        });
        this.setTokenSpanEvents(node);
        return node;
    }

    protected createTokenRemoveSpanNode() {
        const node = document.createElement("span");
        node.classList.add("fract-token-span", "remove");
        this.setTokenSpanEvents(node, true);
        return node;
    }

    protected setTokenSpanEvents(node: Element, remove: boolean = false) {
        node.addEventListener('dragover', evDragOver, false);
        node.addEventListener('drop', evDrop, false);
        node.addEventListener('dragenter', evDragEnter, false);
        node.addEventListener('dragleave', evDragLeave, false);

        const view = this;

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
                this.insertAdjacentElement("afterend", view.createTokenSpanNode());
                this.insertAdjacentElement("afterend", view.createTokenNode(token));
            }

            const oldTokenNode = document.getElementById(oldId);
            if (oldTokenNode.dataset.isEditable === "yes") {
                oldTokenNode.nextSibling.remove();
                oldTokenNode.remove();
            }

            view.onDrop();
            return false;
        }

        function findSpan(node): HTMLElement {
            return node.classList.contains('fract-token-span') ? node : node.nextSibling;
        }

        function evDragEnter(e) {
            findSpan(this).classList.add('over');
        }

        function evDragLeave(e) {
            findSpan(this).classList.remove('over');
        }
    }

};

