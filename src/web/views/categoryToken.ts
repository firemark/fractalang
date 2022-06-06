import { TokensView } from "./token";
import { TokenCategory } from "../models";

import { DEFAULT_ICON_URL } from '../consts';

export class TokensCategoryView extends TokensView {
    protected categories: TokenCategory[];

    constructor({node, categories, iconUrl = DEFAULT_ICON_URL}: {
        node: HTMLElement,
        categories: TokenCategory[],
        iconUrl?: string,
    }) {
        super({
            node,
            iconUrl,
            isMovable: false,
            isEditable: true,
        });
        this.categories = categories;
    }

    render() {
        this.clear();
        this.categories.forEach(category => {
            const categoryNode = this.createCategoryNode(category);
            this.node.appendChild(categoryNode);
        });
    }

    protected createCategoryNode(category: TokenCategory): HTMLElement {
        const categoryNode = this.createElement({
            name: 'div',
            classes: ['tokens', 'hide'],
        });
        const categoryNodeName = this.createElement({
            name: 'span',
            classes: ['label'],
            text: category.label,
        });
        categoryNodeName.addEventListener('click', function () {
            this.classList.toggle('hide');
            return false;
        }, false);
        categoryNode.appendChild(categoryNodeName);

        category.tokens.forEach(tokenInfo => {
            categoryNode.appendChild(this.createTokenNode(tokenInfo.name));
            categoryNode.appendChild(this.createElement({
                name: 'span',
                classes: ['label'],
                text: tokenInfo.label,
            }));
        });

        return categoryNode;
    }
}
