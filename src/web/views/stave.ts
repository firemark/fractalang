import { View } from './view';

import { TokensStaveView } from './staveToken';

import { Stave } from '../models';
import { DEFAULT_ICON_URL } from '../consts';

export class StaveView extends View {
    private tokenView: TokensStaveView
    private tokensNode: HTMLElement;
    private iconUrl: string;

    constructor({
        node,
        onChange,
        isDraggable = false,
        iconUrl = DEFAULT_ICON_URL,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.tokensNode = document.createElement("div");
        this.tokenView = new TokensStaveView({
            node: this.tokensNode,
            onDrop: onChange,
            isDraggable,
            iconUrl,
        });
    }

    render({
        name,
        suffix = "",
        tokens = [],
    }) {
        this.node.classList.add("stave");
        this.node.dataset.name = name;
        this.node.dataset.suffix = suffix;
        this.node.appendChild(this.createName(name, suffix));
        this.node.appendChild(this.tokensNode);
        this.tokenView.render(tokens);
    }

    checkName(name: string, suffix: string): boolean {
        return this.node.dataset.name === name && this.node.dataset.suffix === suffix;
    }

    show() {
        this.node.classList.remove("hide");
    }

    hide() {
        this.node.classList.add("hide");
    }

    showOrHide() {
        this.node.classList.toggle("hide");
    }

    pushTokenOnBack(token: string) {
        this.tokenView.pushTokenOnBack(token);
    }

    removeTokenOnBack() {
        this.tokenView.removeTokenOnBack();
    }

    couldBeScraped(): boolean {
        const isHide = this.node.classList.contains("hide");
        return !isHide;
    }

    scrape(): Stave {
        const tokens = this.tokenView.scrapeTokens();
        const {name, suffix} = this.node.dataset;
        const realname = suffix ? `${name}::${suffix}` : name;
        return {name: realname, tokens};
    }

    protected createName(name: string, suffix?: string): Element {
        const node = document.createElement("span");
        node.classList.add("name");
        const realname = suffix ? `${name}_${suffix}` : name;
        node.style.backgroundImage = `url(${this.iconUrl}/CALL_${realname}.svg)`;
        return node;
    }
}
