import { View } from "./view";
import { TOKEN_FAMILIES, NAME_TO_FAMILY } from "@/web/tokensFamily";
import { NAME_TO_TOKEN } from "@/web/tokens"
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
            const tokenInfo = NAME_TO_TOKEN.get(token);
            if (tokenInfo === undefined) {
                return;
            }
            const tokenWithLabelNode = this.createElement({
                name: 'div',
                classes: ['dialog-token'],
            });
            const tokenNode = this.createElement({
                name: 'div',
                classes: ['fract-token'],
            });
            tokenNode.dataset.token = token;
            tokenNode.style.backgroundImage = `url(${this.#iconUrl}/${token}.svg)`;
            tokenNode.style.width = `48px`;
            tokenNode.style.height = `48px`;

            const labelNode = this.createElement({
                name: 'span',
                classes: ['label'],
                text: tokenInfo.label,
            })

            tokenWithLabelNode.appendChild(tokenNode);
            tokenWithLabelNode.appendChild(labelNode);
            this.node.appendChild(tokenWithLabelNode);
        });
        (this.node as HTMLDialogElement).showModal();
    }
}
