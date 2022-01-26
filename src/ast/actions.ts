import { Context } from "../context";
import { Node, ValueNode, ActionNode, ActionResult, evalValue } from "./base";

export class Function implements Node {
    name: string;
    actions: ActionNode[];

    constructor(name, actions) {
        this.name = name;
        this.actions = actions;
    }

    exec(context: Context) {
        const actions = this.actions;
        const locals = actions.map(() => ({}));
        const size = actions.length;
        for(let index = 0; index < size;) {
            const local = locals.at(index);
            const action = actions.at(index);
            const { shift, reverse } = action.exec(context, local);
            this.execReverse(index, reverse ? Math.round(reverse) : 0, context);
            index += shift ? Math.round(shift) : 1;
        }
    }

    execReverse(stopIndex: number, reverse: number, context: Context) {
        if (reverse === 0) {
            return;
        }
        const actions = this.actions;
        const startReserve = Math.max(0, stopIndex - reverse);
        for(let index = stopIndex; index >= startReserve; index--) {
            actions.at(index).execReverse(context);
        }
    }

    size() : number {
        return this.actions.length;
    }
}

abstract class NodeWithValue extends ActionNode {
    private value: ValueNode[];

    constructor(value) {
        super();
        this.value = value;
    }

    protected eval(context: Context): number {
        return evalValue(this.value, context);
    }
}

export class Call extends NodeWithValue {
    private name: string;

    constructor(name, value) {
        super(value);
        this.name = name;
    }

    exec(context: Context): ActionResult {
        const func = context.findFunction(this.name);
        if (!(func instanceof Function)) {
            return {};
        }
        const newArgument = this.eval(context);
        const newContext = context.createNewContext(newArgument);
        func.exec(newContext);
        return {};
    }

    execReverse(context: Context) {
        const func = context.findFunction(this.name);
        if (!(func instanceof Function)) {
            return;
        }
        const newArgument = this.eval(context);
        const newContext = context.createNewContext(newArgument);
        const lastIndex = func.size() - 1;
        func.execReverse(lastIndex, lastIndex, newContext);
    }
}

export class DrawLine extends NodeWithValue {
    exec(context: Context): ActionResult {
        const distance = this.eval(context);
        context.getCursor().drawLine(distance);
        return {};
    }

    execReverse(context: Context) {
        const distance = -this.eval(context);
        context.getCursor().forward(distance);
    }
}

export class DrawCircle extends NodeWithValue {
    exec(context: Context): ActionResult {
        const distance = this.eval(context);
        context.getCursor().drawCircle(distance);
        return {};
    }
}

export class Forward extends NodeWithValue {
    exec(context: Context): ActionResult {
        const distance = this.eval(context);
        context.getCursor().forward(distance);
        return {};
    }

    execReverse(context: Context) {
        const distance = -this.eval(context);
        context.getCursor().forward(distance);
    }
}

export class RotateLeft extends NodeWithValue {
    exec(context: Context): ActionResult {
        const angle = -this.eval(context);
        context.getCursor().rotate(angle);
        return {};
    }

    execReverse(context: Context) {
        const angle = -this.eval(context);
        context.getCursor().rotate(angle);
    }
}

export class RotateRight extends NodeWithValue {
    exec(context: Context): ActionResult {
        const angle = this.eval(context);
        context.getCursor().rotate(angle);
        return {};
    }

    execReverse(context: Context) {
        const angle = -this.eval(context);
        context.getCursor().rotate(angle);
    }
}

export class Reverse extends NodeWithValue {
    exec(context: Context): ActionResult {
        const iterations = this.eval(context);
        return {reverse: iterations};
    }
}

export class Replay extends NodeWithValue {
    exec(context: Context, local: any): ActionResult {
        const counter = local.counter || 1;
        const size = Math.round(this.eval(context));
        console.log(counter, size);
        if (counter < size) {
            local.counter = counter + 1;
            return {shift: -1};
        }
        return {};
    }
}
