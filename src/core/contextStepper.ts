import { Context } from "@/core/context";
import { ActionResult, CallR, ContinueR, JumpR, ReverseR } from "@/core/ast/actionResult";
import { Function } from "@/core/ast/function";
import { FunctionsBag } from "@/core/functionsBag";

export interface MoveArgs {
    result: ActionResult; 
    bag: FunctionsBag; 
    push: PushCb;
}

function createLocals(func: Function) {
    return Array.from(func.actions, () => ({})); 
}

type PushCb = (stepper: ContextStepper) => void;

export function createInitStepper(context: Context, func: Function) {
    return new ForwardContextStepper({
        function: func,
        locals: createLocals(func),
        index: 0,
        context,
    });
}

interface Scope {
    context: Context;
    index: number;
    function: Function;
    locals: object[];
}

export abstract class ContextStepper {
    protected scope: Scope;

    constructor (scope: Scope) {
        this.scope = scope;
    }

    abstract exec(): ActionResult;
    abstract move(args: MoveArgs): boolean;
    onEnd() { this.scope.context.onEnd(); };

    get index(): number { return this.scope.index; }
    get stave(): string { return this.scope.function.name; }
}

export class ForwardContextStepper extends ContextStepper {
    exec(): ActionResult {
        const { index, function: func, locals } = this.scope;
        const action = func.actions[index];
        const local = locals[index];
        if (!action || !local) {
            return new ContinueR();
        }
        return action.exec(this.scope.context, local);
    }

    move({result, bag, push}: MoveArgs): boolean {
        if (result instanceof ContinueR) {
            this.scope.index += 1;
        } else if (result instanceof JumpR) {
            this.scope.index += result.count;
        } else if (result instanceof CallR) {
            const func = bag.findFunction(result.stave, result.newContext.iteration);
            if (func !== null) {
                push(new ForwardContextStepper({
                    context: result.newContext,
                    index: 0,
                    function: func,
                    locals: createLocals(func),
                }));
            }
            this.scope.index += 1;
        } else if (result instanceof ReverseR) {
            const endIndex = Math.max(0, this.scope.index - result.count);
            push(new ReverseContextStepper({
                context: this.scope.context,
                index: this.scope.index - 1,
                function: this.scope.function,
                locals: createLocals(this.scope.function),
            }, endIndex));
            this.scope.index += 1;
        } else {
            throw "Wrong Action";
        }
        return this.isIndexInRange();
    }

    protected isIndexInRange(): boolean {
        const { index, function: func } = this.scope;
        return index >= 0 && index < func.size;
    }
}

export class ReverseContextStepper extends ContextStepper {
    #endIndex: number;

    constructor(scope: Scope, endIndex: number = 0) {
        super(scope);
        this.#endIndex = endIndex;
    }

    exec(): ActionResult {
        const { index, function: func, locals } = this.scope;
        const action = func.actions[index];
        const local = locals[index];
        return action.execReverse(this.scope.context, local);
    }

    move({result, bag, push}: MoveArgs): boolean {
        if (result instanceof ContinueR) {
            this.scope.index -= 1;
        } else if (result instanceof JumpR) {
            this.scope.index -= result.count;
        } else if (result instanceof CallR) {
            const func = bag.findFunction(result.stave, result.newContext.iteration);
            if (func !== null) {
                push(new ReverseContextStepper({
                    context: result.newContext,
                    index: func.size - 1,
                    function: func,
                    locals: createLocals(func),
                }));
            }
            this.scope.index -= 1;
        } else if (result instanceof ReverseR) {
            /// TODO - implement Reverse-Reverse
            /// Or maybe one stepper with move cursor only with specified direction?
            this.scope.index -= result.count;
        } else {
            throw "Wrong Action";
        }
        return this.isIndexInRange();
    }

    protected isIndexInRange(): boolean {
        const { index, function: func } = this.scope;
        return index >= this.#endIndex && index < func.size;
    }
}