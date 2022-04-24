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
            this.execReverse(index - 1, reverse ? Math.round(reverse) - 1 : 0, context);
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
            index -= actions.at(index).execReverse(context);
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

    execReverse(context: Context): number {
        const func = context.findFunction(this.name);
        if (!(func instanceof Function)) {
            return;
        }
        const newArgument = this.eval(context);
        const newContext = context.createNewContext(newArgument, { reverseValue: !context.reverseValue });
        const lastIndex = func.size() - 1;
        func.execReverse(lastIndex, lastIndex, newContext);
        return 0;
    }
}

export class DrawLine extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: length, strokeThickness, color} = this.eval(context);
        context.getCursor().drawLine(length, strokeThickness, color);
        return {};
    }

    execReverse(context: Context): number {
        const distance = -this.eval(context).value;
        context.getCursor().forward(distance);
        return 0;
    }
}

export class DrawCircle extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: size, color} = this.eval(context);
        context.getCursor().drawCircle(size, color);
        return {};
    }
}

export class DrawSquare extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: size, color} = this.eval(context);
        context.getCursor().drawSquare(size, color);
        return {};
    }
}

export class DrawTriangle extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: size, color} = this.eval(context);
        context.getCursor().drawTriangle(size, color);
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
        const {value: size, strokeThickness, color} = this.eval(context);
        context.getCursor().drawArcLine(this.ratio, size, strokeThickness, color);
        return {};
    }

    execReverse(context: Context): number {
        const distance = -this.eval(context).value;
        const cursor = context.getCursor();
        cursor.rotate(-this.ratio / 2);
        cursor.forward(distance);
        cursor.rotate(-this.ratio / 2);
        return 0;
    }
}

export class Forward extends NodeWithValue {
    exec(context: Context): ActionResult {
        const distance = this.eval(context).value;
        context.getCursor().forward(distance);
        return {};
    }

    execReverse(context: Context): number {
        const distance = -this.eval(context).value;
        context.getCursor().forward(distance);
        return 0;
    }
}

export class RotateLeft extends NodeWithValue {
    exec(context: Context): ActionResult {
        const angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
        return {};
    }

    execReverse(context: Context): number {
        const angle = this.eval(context).value;
        context.getCursor().rotate(angle);
        return 0;
    }
}

export class RotateRight extends NodeWithValue {
    exec(context: Context): ActionResult {
        const angle = this.eval(context).value;
        context.getCursor().rotate(angle);
        return {};
    }

    execReverse(context: Context): number {
        const angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
        return 0;
    }
}

export class Reverse extends NodeWithValue {
    exec(context: Context): ActionResult {
        const iterations = this.eval(context).value;
        return {reverse: iterations};
    }

    execReverse(context: Context): number {
        let iterations = this.eval(context).value;
        return Math.abs(iterations);
    }
}

export class Replay extends NodeWithValue {
    exec(context: Context, local: any): ActionResult {
        const counter = local.counter || 1;
        const size = Math.round(this.eval(context).value);
        if (counter < size) {
            local.counter = counter + 1;
            return {shift: -1};
        }
        return {};
    }
}
