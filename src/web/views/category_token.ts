class TokensCategoryView extends TokensView {

    constructor({
        node: HTMLElement,
        iconUrl = DEFAULT_ICON_URL,
    }) {
        super({
            node,
            iconUrl,
            isMovable = false,
            isEventable = true,
        });
    }

    render(categories: TokenCategory[]) {
        this.clear();
        categories.forEach(category => {
            const categoryNode = this.createCategoryNode(category);
            this.node.appendChild(categoryNode);
        });
    }

    createCategoryNode(category: TokenCategory): Element {
        const categoryNode = this.createElement({
            name: 'div',
            classes: ['tokens', 'hide'],
        });
        const categoryNodeName = this.createElement({
            name: 'span',
            classes: ['label'],
            text: category.label,
        });
        categoryNodeName.addEventListener('click', () => {
            categoryNode.classList.toggle('hide');
            return false;
        }, false);
        categoryNode.appendChild(categoryNodeName);

        category.tokens.forEach(tokenInfo => {
            categoryNode.appendChild(this.createTokenNode(tokenInfo.name, {isTemplate}));
            categoryNode.appendChild(this.createElement({
                name: 'span',
                classes: ['label'],
                text: tokenInfo.label,
            }));
        });
        return category;
    }
}
