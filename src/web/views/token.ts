import { View } from "./view";
import { NAME_TO_TOKEN } from "@/web/tokens";
import { DEFAULT_ICON_URL } from '@/web/consts';

export interface Callbacks {
    onDrop: (d: HTMLElement, o: HTMLElement) => void | null;
    onMove: (d: HTMLElement, o: HTMLElement | null, n: HTMLElement | null) => void | null;
    canDrag: () => boolean | null;
}

export class TokensView extends View {
    readonly iconUrl: string;
    #callbacks: Callbacks

    constructor({ node, callbacks, iconUrl = DEFAULT_ICON_URL }: {
        node: HTMLElement,
        callbacks: Callbacks
        iconUrl?: string,
    }) {
        super(node);
        this.iconUrl = iconUrl;
        this.#callbacks = callbacks;
    }

    get isDraggable() {
        return this.#callbacks.onDrop !== null;
    }

    public addFlagOnActionToken(flag: string, actionIndex: number) {
        this.findTokenNodeByActionIndex(actionIndex).classList.add(flag);
    }

    public removeFlagOnActionToken(flag: string, actionIndex: number) {
        this.findTokenNodeByActionIndex(actionIndex).classList.remove(flag);
    }

    private findTokenNodeByActionIndex(actionIndex: number): HTMLElement {
        const query = `*[data-action-index='${actionIndex}']`;
        return this.node.querySelector(query);
    }

    protected createTokenNode(token: string): HTMLElement {
        const tokenInfo = NAME_TO_TOKEN.get(token);
        const node = this.createElement({
            name: 'span',
            classes: ['fract-token'],
        });
        node.dataset.token = token;
        node.dataset.type = tokenInfo ? tokenInfo.type : "unknown";
        node.style.backgroundImage = `url(${this.iconUrl}/${token}.svg)`;
        if (this.isDraggable) {
            this.setTokenEvents(node);
        }
        return node;
    }

    protected createDragNode(node: HTMLElement): HTMLElement {
        const dragNode = document.createElement('span');
        dragNode.classList.add('fract-token', 'move');
        dragNode.style.backgroundImage = node.style.backgroundImage;
        dragNode.dataset.token = node.dataset.token;
        return dragNode;
    }

    private setTokenEvents(node: HTMLElement) {
        node.addEventListener('mousedown', dragMouseStart, false);
        node.addEventListener('touchstart', dragTouchStart, false);

        const callbacks = this.#callbacks;

        const createContext = (coordsCb) =>
            new DragContext(this.createDragNode(node), coordsCb, callbacks);

        function dragMouseStart(event: MouseEvent) {
            if (event.button != 0) {
                return;
            }
            event.preventDefault();
            if (callbacks.canDrag && !callbacks.canDrag()) {
                return;
            }
            const context = createContext(getMouseCoords);
            context.init({
                mousemove: context.createDragMove(),
                mouseup: context.createDragStop(),
            });
            context.update(event);
        }

        function dragTouchStart(event: TouchEvent) {
            if (callbacks.canDrag && !callbacks.canDrag()) {
                return;
            }
            const context = createContext(getTouchCoords);
            context.init({
                touchmove: context.createDragMove(),
                touchend: context.createDragStop(),
            });
            context.update(event);
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
    private dragNode: HTMLElement;
    private overNode: HTMLElement | null;
    private eventCallbacks: { [k: string]: (e: EventType) => void };
    private _getCoords: (event: EventType) => [number, number];
    private callbacks: Callbacks;

    constructor(
        dragNode: HTMLElement,
        getCoords: (event: EventType) => [number, number],
        callbacks: Callbacks,
    ) {
        this.dragNode = dragNode;
        this.overNode = null;
        this.eventCallbacks = {};
        this.callbacks = callbacks;
        this._getCoords = getCoords;
    }

    createDragMove() {
        return (event: EventType) => {
            this.update(event);
        }
    }

    createDragStop() {
        return (event: EventType) => {
            if (this.overNode !== null) {
                this.callbacks.onDrop(this.dragNode, this.overNode);
            }
            this.clear();
        }
    }

    public init(eventCallbacks: { [k: string]: (e: EventType) => void }) {
        this.eventCallbacks = eventCallbacks
        document.body.appendChild(this.dragNode);
        Object.entries(this.eventCallbacks).forEach(([name, cb]) => {
            document.addEventListener(name, cb, false);
        });
    }

    public clear() {
        this.dragNode.remove();
        if (this.callbacks.onMove) {
            this.callbacks.onMove(this.dragNode, this.overNode, null);
        }
        Object.entries(this.eventCallbacks).forEach(([name, cb]) => {
            document.removeEventListener(name, cb, false);
        });
    }

    public update(event: EventType) {
        const [x, y] = this.getCoords(event);
        this.updateCoords(x, y);
        const oldOverNode = this.overNode;
        const newOverNode = this.findOverNode();
        if (this.callbacks.onMove && !Object.is(oldOverNode, newOverNode)) {
            this.callbacks.onMove(this.dragNode, oldOverNode, newOverNode);
        }
        this.overNode = newOverNode;
    }

    private updateCoords(x: number, y: number) {
        this.dragNode.style.left = `${x.toFixed()}px`;
        this.dragNode.style.top = `${y.toFixed()}px`;
    }

    private findOverNode(): HTMLElement | null {
        const codeNode = document.querySelector("#code");
        const filter = this.getWalkerFilter();
        const walker = document.createTreeWalker(codeNode, NodeFilter.SHOW_ELEMENT, filter);
        while (walker.nextNode() !== null);
        return walker.currentNode as HTMLElement;
    }

    private getWalkerFilter() {
        const VALID_CLASSES = ['fract-token-span', 'fract-staves', 'tokens'];
        const dragRect = this.dragNode.getBoundingClientRect();

        return {
            acceptNode(node: HTMLElement) {
                const rect = node.getBoundingClientRect();

                if (dragRect.right < rect.left
                    || dragRect.left > rect.right
                    || dragRect.bottom < rect.top
                    || dragRect.top > rect.bottom) {
                    return NodeFilter.FILTER_REJECT;
                }

                if (!VALID_CLASSES.some(c => node.classList.contains(c))) {
                    return NodeFilter.FILTER_SKIP;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        };
    }

    private getCoords(event: EventType): [number, number] {
        const [x, y] = this._getCoords(event);
        const nx = x - this.dragNode.clientWidth / 2;
        const ny = y - this.dragNode.clientHeight;
        return [nx, ny];
    }

};