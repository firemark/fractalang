import { ICursor } from "@/core/cursor";
import { StackStep } from "@/core/step";

export interface State {
    debug: boolean,
    stave: string,
    actionIndex: number,
}

export interface Callbacks {
    onState: (previousState: State | null, state: State) => void,
    renderCb: (cursor: ICursor) => void,
}

export class DebugController {
    #stack: StackStep | null;
    #interval: ReturnType<typeof setInterval> | null;
    #previousState: State | null;
    #callbacks: Callbacks;

    constructor(callbacks: Callbacks) {
        this.#stack = null;
        this.#interval = null;
        this.#previousState = null;
        this.#callbacks = callbacks;
    }

    init(stack: StackStep) {
        this.#stack = stack;
        this.step();
    }

    step(): boolean {
        const { halt, stave, index } = this.#stack.step();
        this.#callbacks.renderCb(this.#stack.cursor);
        this.#updateState({
            debug: true,
            stave: stave,
            actionIndex: index,
        });
        return !halt;
    }

    play(period: number = 100) {
        this.stop();
        this.#interval = setInterval(() => {
            if (!this.step()) {
                this.stop();
            }
        }, period);
    }

    exit() {
        this.stop();
        this.#updateState({ debug: false, stave: '?', actionIndex: 0 });
        this.#stack = null;
        this.#previousState = null;
    }

    stop() {
        if (this.#interval === null) {
            return;
        }
        clearInterval(this.#interval);
        this.#interval = null;
    }

    #updateState(state: State) {
        const previousState = this.#previousState;
        this.#previousState = state;
        this.#callbacks.onState(previousState, state);
    }

    isDebug(): boolean {
        return this.#stack !== null;
    }
}
