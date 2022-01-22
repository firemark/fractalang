import { Context } from "../context";
import { Node, ValueNode, ActionNode, ActionResult } from "./base";

export class Function implements Node {
    name: string;
    actions: ActionNode[];

    constructor(name, actions) {
        this.name = name;
        this.actions = actions;
    }

    exec(context: Context) {
        const actions = this.actions;
        const size = actions.length;
        for(;;) {
            const index = context.getIndex();
            if (index >= size) {
                break;
            }
            const { shift, reverse } = actions.at(index).exec(context);
            this.doReverse(index, reverse ? Math.round(reverse) : 0, context);
            context.shift(1);
            //context.shift(shift ? Math.round(shift) : 1);  // TODO add replay
        }
    }

    private doReverse(stopIndex: number, reverse: number, context: Context) {
        if (reverse === 0) {
            return;
        }
        const actions = this.actions;
        const startReserve = Math.max(0, stopIndex - reverse);
        for(let index = startReserve; index < stopIndex; index++) {
            actions.at(index).execReverse(context);
        }
    }
}

abstract class NodeWithValue extends ActionNode {
    private value: ValueNode[];

    constructor(value) {
        super();
        this.value = value;
    }

    protected eval(context: Context): number {
        return this.value.reduce((acc, v) => acc * v.eval(context), 1.0);
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
        if (!func) {
            return {};
        }
        const newArgument = this.eval(context);
        const newContext = context.createNewContext(newArgument);
        func.exec(newContext);
        return {};
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

    execReverse(context: Context){
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
    exec(context: Context) {
        const iterations = this.eval(context);
        return {reverse: iterations};
    }
}

export class Replay extends NodeWithValue {
    exec(context: Context) {
        const iterations = this.eval(context);
        return {shift: -iterations - 1};
    }
}
