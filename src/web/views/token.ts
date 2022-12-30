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
        node.addEventListener('mousedown', dragStart, false);

        function dragStart(event: MouseEvent) {
            event.preventDefault();
            const context = new DragContext(node, getMouseCoords);
            context.init();
            context.update(event);

            document.addEventListener('mousemove', dragMove(context), false);
            document.addEventListener('mouseup', dragStop(context), false);
        }

        function dragMove<EventType extends Event>(context: DragContext<EventType>) {
            return (event: EventType) => {
                event.preventDefault();
                context.update(event);
            }
        }

        function dragStop<EventType extends Event>(context: DragContext<EventType>) {
            return (event: EventType) => {
                event.preventDefault();
                context.clear();
            }
        }

        function getMouseCoords(event: MouseEvent): [number, number] {
            return [event.clientX, event.clientY];
        }
    }
}


class DragContext<EventType extends Event> {
    public dragNode: HTMLElement;
    public overNode: HTMLElement | null;
    private _getCoords: (event: EventType) => [number, number];
    private VALID_CLASSES = ['fract-token-span', 'fract-token', 'fract-token-group'];

    constructor(parentNode: HTMLElement, getCoords: (event: EventType) => [number, number]) {
        this.dragNode = this.createDragNode(parentNode);
        this.overNode = null;
        this._getCoords = getCoords;
    }

    public init() {
        document.body.appendChild(this.dragNode);
    }
    
    public clear() {
        this.dragNode.remove();
    }

    public update(event: EventType) {
        const [x, y] = this.getCoords(event);
        this.updateCoords(x, y);
        if (this.overNode !== null) {
            this.overNode.classList.remove("over");
        }
        this.updateOverNode(x, y);
        if (this.overNode !== null) {
            this.overNode.classList.add("over");
        }
    }

    private updateCoords(x: number, y: number) {
        this.dragNode.style.left = `${x.toFixed()}px`;
        this.dragNode.style.top = `${y.toFixed()}px`;
    }

    private updateOverNode(x: number, y: number) {
        const nodes = document.elementsFromPoint(x, y);
        const node = nodes.find(
            node => !node.classList.contains("move") && this.VALID_CLASSES.some(c => node.classList.contains(c))
        );
        this.overNode = (node as HTMLElement) || null;
    }

    private getCoords(event: EventType): [number, number] {
        const [x, y] = this._getCoords(event);
        const nx = x - this.dragNode.clientWidth / 2;
        const ny = y - this.dragNode.clientHeight / 2;
        return [nx, ny];
    }

    private createDragNode(node: HTMLElement): HTMLElement {
        const dragNode = document.createElement('span');
        dragNode.classList.add('fract-token', 'move');
        dragNode.dataset.token = node.dataset.token;
        dragNode.dataset.type = node.dataset.type;
        dragNode.style.backgroundImage = node.style.backgroundImage;
        dragNode.dataset.tokenId = node.id;
        return dragNode;
    }
};