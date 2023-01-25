import { View } from './view';

import { TokensStaveView } from './staveToken';

import { Stave } from '@/web/models';
import { DEFAULT_ICON_URL } from '@/web/consts';

export class StaveView extends View {
    private tokenView: TokensStaveView
    private tokensNode: HTMLElement;
    private iconUrl: string;
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
        super(node);
        this.iconUrl = iconUrl;
        this.name = name;
        this.suffix = suffix;
        this.tokensNode = document.createElement("div");
        this.tokenView = new TokensStaveView({
            node: this.tokensNode,
            name,
            suffix,
            callbacks,
            iconUrl,
            tokens,
        });
    }

    render() {
        this.node.classList.add("stave");
        this.node.dataset.name = this.name;
        this.node.dataset.suffix = this.suffix;
        this.node.appendChild(this.createName(this.name, this.suffix));
        this.node.appendChild(this.tokensNode);
        this.tokenView.render();
    }

    checkName(name: string, suffix: string): boolean {
        return this.name === name && this.suffix === suffix;
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

    pushTokenAfter(token: string, index: number) {
        this.tokenView.pushTokenAfter(token, index);
    }

    replaceToken(newToken: string, index: number) {
        this.tokenView.replaceToken(newToken, index);
    }

    removeToken(index: number) {
        this.tokenView.removeToken(index);
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

    addFlagOnActionToken(flag: string, actionIndex: number) {
        this.tokenView.addFlagOnActionToken(flag, actionIndex);
    }

    removeFlagOnActionToken(flag: string, actionIndex: number) {
        this.tokenView.removeFlagOnActionToken(flag, actionIndex);
    }

    protected createName(name: string, suffix?: string): Element {
        const node = document.createElement("span");
        node.classList.add("name");
        const realname = suffix ? `${name}_${suffix}` : name;
        node.style.backgroundImage = `url(${this.iconUrl}/CALL_${realname}.svg)`;
        return node;
    }
}
