import { View } from "./view";
import { NAME_TO_TOKEN } from "../tokens";

class TokensView : extends View {
    private iconUrl: str;
    private isEditable: boolean;
    private isMovable: boolean;

    constructor({
        node: HTMLElement,
        iconUrl = DEFAULT_ICON_URL,
        isMovable = false,
        isEventable = false,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.isMovable = isMovable;
        this.isEventable = isEventable;
    }

    createTokenNode(token: string): Element {
        const tokenInfo = NAME_TO_TOKEN.get(token);
        const node = document.createElement('span');
        node.classList.add('fract-token');
        node.id = `token-${uuid4()}`;
        node.dataset.token = token;
        node.dataset.type = tokenInfo ? tokenInfo.type : "unknown";
        node.dataset.isTemplate = this.isTemplate ? 'yes' : 'no';
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
