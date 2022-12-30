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
        node.addEventListener('mousedown', dragMouseStart, false);
        node.addEventListener('touchstart', dragTouchStart, false);

        function dragMouseStart(event: MouseEvent) {
            event.preventDefault();
            const context = new DragContext(node, getMouseCoords);
            context.init({
                mousemove: dragMove(context),
                mouseup: dragStop(context),
            });
            context.update(event);
        }

        function dragTouchStart(event: TouchEvent) {
            const context = new DragContext(node, getTouchCoords);
            context.init({
                touchmove: dragMove(context),
                touchend: dragStop(context),
            });
            context.update(event);
        }

        function dragMove<EventType extends Event>(context: DragContext<EventType>) {
            return (event: EventType) => {
                context.update(event);
            }
        }

        function dragStop<EventType extends Event>(context: DragContext<EventType>) {
            return (event: EventType) => {
                context.clear();
            }
        }

        function getMouseCoords(event: MouseEvent): [number, number] {
            return [event.clientX, event.clientY];
        }

        function getTouchCoords(event: TouchEvent): [number, number] {
            return [event.touches[0].clientX, event.touches[0].clientY];
        }
    }
}


class DragContext<EventType extends Event> {
    public dragNode: HTMLElement;
    public overNode: HTMLElement | null;
    public eventCallbacks: {[k: string]: (e: EventType) => void};
    private _getCoords: (event: EventType) => [number, number];
    private VALID_CLASSES = ['fract-token-span', 'fract-token', 'fract-token-group'];

    constructor(parentNode: HTMLElement, getCoords: (event: EventType) => [number, number]) {
        this.dragNode = this.createDragNode(parentNode);
        this.overNode = null;
        this.eventCallbacks = {};
        this._getCoords = getCoords;
    }

    public init(eventCallbacks: {[k: string]: (e: EventType) => void}) {
        this.eventCallbacks = eventCallbacks
        document.body.appendChild(this.dragNode);
        Object.entries(this.eventCallbacks).forEach(([name, cb]) => {
            document.addEventListener(name, cb, false);
        });
    }
    
    public clear() {
        this.dragNode.remove();
        if (this.overNode !== null) {
            this.overNode.classList.remove("over");
        }
        Object.entries(this.eventCallbacks).forEach(([name, cb]) => {
            document.removeEventListener(name, cb, false);
        });
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