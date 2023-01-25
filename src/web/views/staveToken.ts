import { TokensView } from './token';

import { DEFAULT_ICON_URL } from '@/web/consts';

export class TokensStaveView extends TokensView {
    private tokens: string[];
    private name: string;
    private suffix: string;

    constructor({
        node,
        name,
        suffix,
        callbacks,
        iconUrl = DEFAULT_ICON_URL,
        tokens = [],
    }) {
        super({
            node,
            iconUrl,
            callbacks,
        });
        this.tokens = tokens;
        this.name = name;
        this.suffix = suffix;
    }

    render() {
        this.node.classList.add("tokens");

        this.renderTokens();
    }

    renderTokens() {
        this.node.innerHTML = "";
        if (this.isDraggable) {
            this.node.appendChild(this.createTokenSpanNode(0));
        }
        let actionIndex = 0;
        this.tokens.forEach((token: string, index: number) => {
            actionIndex = this.pushTokenNodeOnBack(this.node, token, index, actionIndex)
        });
    }

    pushTokenAfter(token: string, index: number) {
        this.tokens.splice(index, 0, token);
        this.renderTokens();
    }

    replaceToken(newToken: string, index: number) {
        this.tokens[index] = newToken;
        this.renderTokens();
    }

    removeToken(index: number) {
        this.tokens.splice(index, 1);
        this.renderTokens();
    }

    pushTokenOnBack(token: string) {
        this.tokens.push(token);
        this.renderTokens();
    }

    removeTokenOnBack() {
        this.tokens.pop();
        this.renderTokens();
    }

    private pushTokenNodeOnBack(tokensNode: HTMLElement, token: string, index: number, actionIndex: number): number {
        const appendSpan = (container: HTMLElement, s = 1) => {
            if (this.isDraggable) {
                container.appendChild(this.createTokenSpanNode(index + s));
            }
        }
        const appendChild = (container: HTMLElement, node: HTMLElement, s = 1) => {
            container.appendChild(node);
            appendSpan(container, s);
        };

        const tokenNode = this.createEnhancedTokenNode(token, index, actionIndex);
        let lastNode = tokensNode.lastChild as HTMLElement;

        if (this.isDraggable) {
            // probably it's a span, find previous node
            lastNode = lastNode.previousSibling as HTMLElement;
        }

        const isGroup = (node: HTMLElement) => node.classList.contains("fract-token-group");
        const isAction = (node: HTMLElement) => node.dataset?.type === "action";

        if (!lastNode) {
            appendChild(tokensNode, tokenNode);
            return actionIndex + (isAction(tokenNode) ? 1 : 0);
        }

        if (isAction(tokenNode)) {
            appendChild(tokensNode, tokenNode);
            return actionIndex + 1;
        } else {
            if (isGroup(lastNode)) {
                if (this.isDraggable) {
                    tokensNode.removeChild(lastNode.nextSibling);
                }
                appendChild(lastNode, tokenNode);
                if (this.isDraggable) {
                    appendSpan(tokensNode);
                }
                return actionIndex;
            }

            if (!isAction(lastNode)) {
                appendChild(tokensNode, tokenNode);
                return actionIndex;
            }

            // Create a new group with action and value.
            const groupNode = this.createEmptyTokenGroup();
            if (this.isDraggable) {
                tokensNode.removeChild(lastNode.nextSibling);
            }
            tokensNode.removeChild(lastNode);
            tokensNode.insertBefore(groupNode, lastNode.nextSibling);
            groupNode.dataset.actionIndex = lastNode.dataset.actionIndex;
            appendChild(groupNode, lastNode, 0);
            appendChild(groupNode, tokenNode);
            appendSpan(tokensNode);
            return actionIndex;
        }
    }

    private createEnhancedTokenNode(token: string, index: number, actionIndex: number): HTMLElement {
        const node = this.createTokenNode(token);
        node.dataset.index = `${index}`;
        node.dataset.name = this.name;
        node.dataset.suffix = this.suffix;
        if (node.dataset?.type === "action") {
            node.dataset.actionIndex = `${actionIndex}`;
        }
        return node;
    }

    protected createDragNode(node: HTMLElement): HTMLElement {
        const dragNode = super.createDragNode(node);
        dragNode.dataset.index = node.dataset.index;
        dragNode.dataset.name = node.dataset.name;
        dragNode.dataset.suffix = node.dataset.suffix;
        return dragNode;
    }

    protected createEmptyTokenGroup() {
        return this.createElement({
            name: "div",
            classes: ["fract-token-group"],
        });
    }

    scrapeTokens(): string[] {
        return this.tokens;
    }

    protected createTokenSpanNode(index: number) {
        const node = this.createElement({
            name: 'span',
            classes: ["fract-token-span"],
        });
        node.dataset.index = `${index}`;
        node.dataset.name = this.name;
        node.dataset.suffix = this.suffix;
        return node;
    }

    protected createTokenRemoveSpanNode() {
        const node = document.createElement("span");
        node.classList.add("fract-token-span", "remove");
        return node;
    }
};

