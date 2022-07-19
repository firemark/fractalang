import { Context, EvaluedValue } from "@/core/context";
import { Cursor, OpsParams } from "@/core/cursor";
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
        const newContext = context.createNewContext(newArgument);
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

abstract class DrawFigure extends NodeWithValue {
    abstract drawFigure(cursor: Cursor, size: number, ops: OpsParams);

    exec(context: Context): ActionResult {
        const evaled = this.eval(context);
        this.drawFigure(context.getCursor(), evaled.value, this.evaledToFigureOps(evaled));
        return {};
    }

    evaledToFigureOps(evaled: EvaluedValue): OpsParams {
        return {
            isFilled: evaled.isFilled,
            color: evaled.color,
            stroke: evaled.strokeThickness,
        };
    }

}

export class DrawCircle extends DrawFigure {
    drawFigure(cursor: Cursor, size: number, ops: OpsParams) {
        cursor.drawCircle(size, ops);
    }
}

export class DrawSquare extends DrawFigure {
    drawFigure(cursor: Cursor, size: number, ops: OpsParams) {
        cursor.drawSquare(size, ops);
    }
}

export class DrawTriangle extends DrawFigure {
    drawFigure(cursor: Cursor, size: number, ops: OpsParams) {
        cursor.drawTriangle(size, ops);
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

abstract class CursorManipulator extends NodeWithValue {
    abstract change(cursor: Cursor, value: number);

    exec(context: Context): ActionResult {
        this.change(context.getCursor(), this.eval(context).value);
        return {};
    }

    execReverse(context: Context): number {
        this.change(context.getCursor(), -this.eval(context).value);
        return 0;
    }
}

export class MoveForward extends CursorManipulator {
    change(cursor: Cursor, value: number) {
        cursor.forward(value);
    }
}

export class MoveBackward extends CursorManipulator {
    change(cursor: Cursor, value: number) {
        cursor.backward(value);
    }
}

export class MoveLeft extends CursorManipulator {
    change(cursor: Cursor, value: number) {
        cursor.left(value);
    }
}

export class MoveRight extends CursorManipulator {
    change(cursor: Cursor, value: number) {
        cursor.right(value);
    }
}

export class RotateRight extends CursorManipulator {
    change(cursor: Cursor, value: number) {
        cursor.rotate(value);
    }
}

export class RotateLeft extends CursorManipulator {
    change(cursor: Cursor, value: number) {
        cursor.rotate(-value);
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
