import { StaveView } from './stave';
import { TokensView } from './token';

import { DEFAULT_ICON_URL } from '@/web/consts';

export class TokensStaveView extends TokensView {
    private findStaveDelegator: (name: string, suffix: string) => (StaveView | undefined);
    private tokens: string[];
    private name: string;
    private suffix: string;

    constructor({
        node,
        name,
        suffix,
        findStaveDelegator,
        iconUrl = DEFAULT_ICON_URL,
        onDrop = null,
        tokens = [],
    }) {
        super({
            node,
            iconUrl,
            onDrop,
        });
        this.tokens = tokens;
        this.findStaveDelegator = findStaveDelegator;
        this.name = name;
        this.suffix = suffix;
    }

    render() {
        this.node.classList.add("outer-tokens");

        const innerNode = this.createElement({
            name: "div",
            classes: ["inner-tokens"],
        });
        this.node.appendChild(innerNode);
        this.renderTokens();

        if (this.isDraggable) {
            this.node.appendChild(this.createTokenRemoveSpanNode());
        }
    }

    renderTokens() {
        const innerNode = this.node.querySelector('.inner-tokens');
        innerNode.innerHTML = "";
        if (this.isDraggable) {
            innerNode.appendChild(this.createTokenSpanNode(0));
        }
        this.tokens.forEach((token: string, index: number) => {
            this.pushTokenNodeOnBack(innerNode as HTMLElement, token, index)
        });
    }

    pushTokenAfter(token: string, index: number) {
        this.tokens.splice(index, 0, token);
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

    private pushTokenNodeOnBack(tokensNode: HTMLElement, token: string, index: number) {
        const appendSpan = (container: HTMLElement, s = 1) => {
            if (this.isDraggable) {
                container.appendChild(this.createTokenSpanNode(index + s));
            }
        }
        const appendChild = (container: HTMLElement, node: HTMLElement, s = 1) => {
            container.appendChild(node);
            appendSpan(container, s);
        };

        const tokenNode = this.createEnhancedTokenNode(token, index);
        let lastNode = tokensNode.lastChild as HTMLElement;

        if (this.isDraggable) {
            // probably it's a span, find previous node
            lastNode = lastNode.previousSibling as HTMLElement;
        }

        if (!lastNode) {
            return appendChild(tokensNode, tokenNode);
        }

        const isGroup = (node: HTMLElement) => node.classList.contains("fract-token-group");
        const isAction = (node: HTMLElement) => node.dataset?.type === "action";

        if (isAction(tokenNode)) {
            appendChild(tokensNode, tokenNode);
        } else {
            if (isGroup(lastNode)) {
                if (this.isDraggable) {
                    tokensNode.removeChild(lastNode.nextSibling);
                }
                appendChild(lastNode, tokenNode);
                if (this.isDraggable) {
                    appendSpan(tokensNode);
                }
                return;
            }

            if (!isAction(lastNode)) {
                return appendChild(tokensNode, tokenNode);
            }

            // Create a new group with action and value.
            const groupNode = this.createEmptyTokenGroup();
            if (this.isDraggable) {
                tokensNode.removeChild(lastNode.nextSibling);
            }
            tokensNode.removeChild(lastNode);
            tokensNode.insertBefore(groupNode, lastNode.nextSibling);
            appendChild(groupNode, lastNode, 0);
            appendChild(groupNode, tokenNode);
            appendSpan(tokensNode);
        }
    }

    private createEnhancedTokenNode(token: string, index: number): HTMLElement {
        const node = this.createTokenNode(token);
        node.dataset.isEditable = this.isDraggable ? 'yes' : 'no';
        node.dataset.index = `${index}`;
        node.dataset.name = this.name;
        node.dataset.suffix = this.suffix;
        return node;
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

