import { View } from "./view";
import { v4 as uuid4 } from 'uuid';
import { NAME_TO_TOKEN } from "@/web/tokens";
import { DEFAULT_ICON_URL } from '@/web/consts';

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
            this.setTokenEvents(node);
        }
        return node;
    }

    private setTokenEvents(node: HTMLElement) {
        const { createElement } = this;
        node.addEventListener('mousedown', dragStart, false);

        function dragStart(event: MouseEvent) {
            event.preventDefault();
            const dragNode = createDragNode();
            document.body.appendChild(dragNode);
            setCoords(dragNode, getCoords(dragNode, event));
            document.addEventListener('mousemove', dragMove(dragNode), false);
            document.addEventListener('mouseup', dragStop(dragNode), false);
        }

        function createDragNode(): HTMLElement {
            const dragNode = createElement({
                name: 'span',
                classes: ['fract-token', 'move'],
            });
            dragNode.dataset.token = node.dataset.token;
            dragNode.dataset.type = node.dataset.type;
            dragNode.style.backgroundImage = node.style.backgroundImage;
            dragNode.dataset.tokenId = node.id;
            return dragNode;
        }

        function dragMove(dragNode: HTMLElement) {
            return (event: MouseEvent) => {
                event.preventDefault();
                const [x, y] = getCoords(dragNode, event);
                const nodes = document.elementsFromPoint(x, y);
                console.log(nodes);
                setCoords(dragNode, [x, y]);
            }
        }

        function dragStop(dragNode: HTMLElement) {
            return (event: MouseEvent) => {
                event.preventDefault();
                dragNode.remove();
            }
        }

        function getCoords(dragNode: HTMLElement, event: MouseEvent): [number, number] {
            const x = event.clientX - dragNode.clientWidth / 2;
            const y = event.clientY - dragNode.clientHeight / 2;
            return [x, y];
        }

        function setCoords(dragNode: HTMLElement, [x, y]: [number, number]) {
            dragNode.style.left = `${x.toFixed()}px`;
            dragNode.style.top = `${y.toFixed()}px`;
        }
    }
}
