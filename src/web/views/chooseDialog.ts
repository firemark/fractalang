import { View } from "./view";
import { TOKEN_FAMILIES, NAME_TO_FAMILY } from "@/web/tokensFamily";
import { DEFAULT_ICON_URL } from "@/web/consts";

export class ChooseTokenDialogView extends View {
    #token: string;
    #index: number;
    #name: string;
    #suffix: string;
    #iconUrl: string;

    constructor(dialogNode: HTMLElement, tokenNode: HTMLElement, iconUrl = DEFAULT_ICON_URL) {
        super(dialogNode);
        this.#token = tokenNode.dataset.token;
        this.#index = parseInt(tokenNode.dataset.index);
        this.#name = tokenNode.dataset.name;
        this.#suffix = tokenNode.dataset.suffix;
        this.#iconUrl = iconUrl;
    }

    render() {
        const familyName = NAME_TO_FAMILY.get(this.#token);
        const family = TOKEN_FAMILIES[familyName] || [];
        if (family.length === 0) {
            this.node.textContent = 'No family :(';
        } 
        family.forEach(token => {
            const spanNode = this.createElement({
                name: 'div',
                classes: ['fract-token'],
            })
            spanNode.dataset.token = token;
            spanNode.style.backgroundImage = `url(${this.#iconUrl}/${token}.svg)`;
            spanNode.style.width = `48px`;
            spanNode.style.height = `48px`;
            this.node.appendChild(spanNode);
        });
        (this.node as HTMLDialogElement).showModal();
    }
}
