import { View } from "./view";
import { TOKEN_FAMILIES, NAME_TO_FAMILY } from "@/web/tokensFamily";
import { NAME_TO_TOKEN } from "@/web/tokens"
import { DEFAULT_ICON_URL } from "@/web/consts";

export interface OnSelectArgs {
    token: string;
    index: number;
    name: string;
    suffix: string;
};

export class ChooseTokenDialogView extends View {
    #args: OnSelectArgs;
    #iconUrl: string;
    #onSelect: (obj: any) => void;

    constructor(dialogNode: HTMLElement, tokenNode: HTMLElement, onSelect: (obj: any) => void, iconUrl = DEFAULT_ICON_URL) {
        super(dialogNode);
        this.#args = {
            token: tokenNode.dataset.token,
            index: parseInt(tokenNode.dataset.index),
            name: tokenNode.dataset.name,
            suffix: tokenNode.dataset.suffix,
        };
        this.#iconUrl = iconUrl;
        this.#onSelect = onSelect;
    }

    render() {
        const familyName = NAME_TO_FAMILY.get(this.#args.token);
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
            tokenWithLabelNode.addEventListener('click', this.onClick.bind(this, token));
            this.node.appendChild(tokenWithLabelNode);
        });
        (this.node as HTMLDialogElement).showModal();
    }

    onClick(token: string, event: MouseEvent) {
        this.#onSelect({...this.#args, token});
        this.node.remove();
    }
}
