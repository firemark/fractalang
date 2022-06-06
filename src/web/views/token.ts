import { View } from "./view";
import { v4 as uuid4 } from 'uuid';
import { NAME_TO_TOKEN } from "../tokens";
import { DEFAULT_ICON_URL } from '../consts';

export class TokensView extends View {
    readonly iconUrl: string;
    readonly isEditable: boolean;
    readonly isMovable: boolean;

    constructor({node, isMovable, isEditable, iconUrl = DEFAULT_ICON_URL}: {
        node: HTMLElement,
        isMovable: boolean,
        isEditable: boolean,
        iconUrl?: string,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.isMovable = isMovable;
        this.isEditable = isEditable;
    }

    createTokenNode(token: string): Element {
        const tokenInfo = NAME_TO_TOKEN.get(token);
        const node = this.createElement({
            name: 'span',
            classes: ['fract-token'],
        });
        node.id = `token-${uuid4()}`;
        node.dataset.token = token;
        node.dataset.type = tokenInfo ? tokenInfo.type : "unknown";
        node.dataset.isMovable = this.isMovable ? 'yes' : 'no';
        node.style.backgroundImage = `url(${this.iconUrl}/${token}.svg)`;
        if (this.isMovable) {
            node.setAttribute('draggable', 'true');
            this.setTokenEvents(node);
        }
        return node;
    }

    private setTokenEvents(node: Element) {
        node.addEventListener('dragstart', evDragStart, false);

        function evDragStart(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('token', this.dataset.token);
            e.dataTransfer.setData('id', this.id);
        }
    }
}
