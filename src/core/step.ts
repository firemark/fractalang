import { Context } from "./context";
import { ContextStepper, createInitStepper } from "./contextStepper";
import { ICursor } from "./cursor";
import { FunctionsBag } from "./functionsBag";

export interface State {
    halt: boolean,
    stave: string,
    index: number,
}

export class StackStep {
    #stack: ContextStepper[];
    #bag: FunctionsBag;
    readonly cursor: ICursor;

    constructor(context: Context, bag: FunctionsBag) {
        const func = bag.findFunction("START") || bag.findFunction("F");
        if (func === null) {
            throw "Start function not found";
        }
        this.#stack = [createInitStepper(context, func)];
        this.#bag = bag;
        this.cursor = context.cursor;
    }

    step(): State {
        if (this.#stack.length == 0) {
            return {
                halt: true,
                stave: '?',
                index: 0,
            };
        }

        let newElement: ContextStepper | null = null;
        const stepper = this.getTopElement();
        const { index, stave } = stepper;
        const result = stepper.exec();
        const stillContinue = stepper.move({
            bag: this.#bag,
            push: (element: ContextStepper) => { newElement = element; },
            result,
        });

        if (!stillContinue) {
            const contextStepper = this.#stack.pop();
            contextStepper.onEnd();
        }

        if (newElement !== null) {
            this.#stack.push(newElement);
        }

        return {
            halt: this.#stack.length == 0,
            stave,
            index,
        };
    }

    private getTopElement(): ContextStepper {
        return this.#stack[this.#stack.length - 1];
    }
}