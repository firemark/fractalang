import { Context, EvaluedValue } from "../context";
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

    protected eval(context: Context): EvaluedValue {
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
        const {value: length, color} = this.eval(context);
        context.getCursor().drawLine(length);
        return {};
    }

    execReverse(context: Context) {
        const distance = -this.eval(context).value;
        context.getCursor().forward(distance);
    }
}

export class DrawCircle extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: size, color} = this.eval(context);
        context.getCursor().drawCircle(size);
        return {};
    }
}

export class DrawSquare extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: size, color} = this.eval(context);
        context.getCursor().drawSquare(size);
        return {};
    }
}

export class DrawTriangle extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value, color} = this.eval(context);
        context.getCursor().drawTriangle(value);
        return {};
    }
}

export class DrawArcLine extends NodeWithValue {
    private ratio: number;

    constructor(ratio, value) {
        super(value);
        this.ratio = ratio;
    }

    exec(context: Context): ActionResult {
        const {value: size, color} = this.eval(context);
        context.getCursor().drawArcLine(this.ratio, size);
        return {};
    }

    execReverse(context: Context) {
        const distance = -this.eval(context).value;
        const cursor = context.getCursor();
        cursor.rotate(-this.ratio / 2);
        cursor.forward(distance);
        cursor.rotate(-this.ratio / 2);
    }
}

export class Forward extends NodeWithValue {
    exec(context: Context): ActionResult {
        const distance = this.eval(context).value;
        context.getCursor().forward(distance);
        return {};
    }

    execReverse(context: Context) {
        const distance = -this.eval(context).value;
        context.getCursor().forward(distance);
    }
}

export class RotateLeft extends NodeWithValue {
    exec(context: Context): ActionResult {
        const angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
        return {};
    }

    execReverse(context: Context) {
        const angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
    }
}

export class RotateRight extends NodeWithValue {
    exec(context: Context): ActionResult {
        const angle = this.eval(context).value;
        context.getCursor().rotate(angle);
        return {};
    }

    execReverse(context: Context) {
        const angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
    }
}

export class Reverse extends NodeWithValue {
    exec(context: Context): ActionResult {
        const iterations = this.eval(context).value;
        return {reverse: iterations};
    }
}

export class Replay extends NodeWithValue {
    exec(context: Context, local: any): ActionResult {
        const counter = local.counter || 1;
        const size = Math.round(this.eval(context).value);
        console.log(counter, size);
        if (counter < size) {
            local.counter = counter + 1;
            return {shift: -1};
        }
        return {};
    }
}
