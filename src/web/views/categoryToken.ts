import { TokensView } from "./token";
import { Callbacks } from "./token";

import { TokenCategory } from "@/web/models";
import { NAME_TO_TOKEN } from "@/web/tokens";
import { DEFAULT_ICON_URL } from '@/web/consts';

export class TokensCategoryView extends TokensView {
    protected categories: TokenCategory[];

    constructor({node, categories, callbacks, iconUrl = DEFAULT_ICON_URL}: {
        node: HTMLElement,
        categories: TokenCategory[],
        callbacks: Callbacks,
        iconUrl?: string,
    }) {
        super({
            node,
            callbacks,
            iconUrl,
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
            classes: ['fract-tokens', 'hide'],
        });
        const categoryNodeName = this.createElement({
            name: 'span',
            classes: ['group-label'],
            text: category.label,
        });
        categoryNodeName.addEventListener('click', function () {
            categoryNode.classList.toggle('hide');
            return false;
        }, false);
        categoryNode.appendChild(categoryNodeName);

        category.tokens.forEach(token => {
            const tokenInfo = NAME_TO_TOKEN.get(token);
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
