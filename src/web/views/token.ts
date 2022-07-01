import { View } from "./view";
import { v4 as uuid4 } from 'uuid';
import { NAME_TO_TOKEN } from "../tokens";
import { DEFAULT_ICON_URL } from '../consts';

export class TokensView extends View {
    readonly iconUrl: string;
    readonly isDraggable: boolean;

    constructor({node, isDraggable, iconUrl = DEFAULT_ICON_URL}: {
        node: HTMLElement,
        isDraggable: boolean,
        iconUrl?: string,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.isDraggable = isDraggable;
    }

    protected createTokenNode(token: string): HTMLElement {
        const tokenInfo = NAME_TO_TOKEN.get(token);
        const node = this.createElement({
            name: 'span',
            classes: ['fract-token'],
        });
        node.id = `token-${uuid4()}`;
        node.dataset.token = token;
        node.dataset.type = tokenInfo ? tokenInfo.type : "unknown";
        node.style.backgroundImage = `url(${this.iconUrl}/${token}.svg)`;
        if (this.isDraggable) {
            node.setAttribute('draggable', 'true');
            this.setTokenEvents(node);
        }
        return node;
    }

    private setTokenEvents(node: Element) {
        node.addEventListener('dragstart', evDragStart, false);

        function evDragStart(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('id', this.id);
        }
    }
}
