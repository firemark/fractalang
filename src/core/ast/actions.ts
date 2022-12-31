import { Context, EvaluedValue } from "@/core/context";
import { Cursor, OpsParams } from "@/core/cursor";
import { ActionResult, ContinueR, JumpR, CallR, ReverseR} from "@/core/ast/actionResult";
import { ValueNode, ActionNode, evalValue } from "./base";

abstract class NodeWithValue extends ActionNode {
    #values: ValueNode[];

    constructor(values: ValueNode[]) {
        super();
        this.#values = values;
    }

    protected eval(context: Context): EvaluedValue {
        return evalValue(this.#values, context);
    }

    protected evalValue(context: Context): number {
        return evalValue(this.#values, context).value;
    }

    protected evalIntValue(context: Context): number {
        return Math.round(this.evalValue(context));
    }
}

export class Call extends NodeWithValue {
    private name: string;

    constructor(name, value) {
        super(value);
        this.name = name;
    }

    exec(context: Context): ActionResult {
        return new CallR(this.name, this.#createContext(context, +1));
    }

    execReverse(context: Context): ActionResult {
        return new CallR(this.name, this.#createContext(context, +1));
    }

    #createContext(context: Context, interationShift: number): Context {
        const newArgument = this.eval(context);
        return context.createNewContext(newArgument, interationShift);
    }
}

export class DrawLine extends NodeWithValue {
    exec(context: Context): ActionResult {
        const {value: length, strokeThickness, color} = this.eval(context);
        context.cursor.drawLine(length, strokeThickness, color);
        return new ContinueR();
    }

    execReverse(context: Context): ActionResult {
        const distance = -this.eval(context).value;
        context.cursor.forward(distance);
        return new ContinueR();
    }
}

abstract class DrawFigure extends NodeWithValue {
    abstract drawFigure(cursor: Cursor, size: number, ops: OpsParams): void;

    exec(context: Context): ActionResult {
        const evaled = this.eval(context);
        this.drawFigure(context.cursor, evaled.value, this.evaledToFigureOps(evaled));
        return new ContinueR();
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
        context.cursor.drawArcLine(this.ratio, size, strokeThickness, color);
        return new ContinueR();
    }

    execReverse(context: Context): ActionResult {
        const distance = -this.eval(context).value;
        const { cursor } = context;
        cursor.rotate(-this.ratio / 2);
        cursor.forward(distance);
        cursor.rotate(-this.ratio / 2);
        return new ContinueR();
    }
}

abstract class CursorManipulator extends NodeWithValue {
    abstract change(cursor: Cursor, value: number): void;

    exec(context: Context): ActionResult {
        this.change(context.cursor, this.eval(context).value);
        return new ContinueR();
    }

    execReverse(context: Context): ActionResult {
        this.change(context.cursor, -this.eval(context).value);
        return new ContinueR();
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
        const iterations = this.evalIntValue(context);
        return new ReverseR(iterations);
    }

    execReverse(context: Context): ActionResult {
        const iterations = this.evalIntValue(context);
        return new ReverseR(iterations);
    }
}

export class Replay extends NodeWithValue {
    exec(context: Context, local: object): ActionResult {
        const counter = local['counter'] || 1;
        const size = this.evalIntValue(context);
        if (counter < size) {
            local['counter'] = counter + 1;
            return new JumpR(-1);
        }
        return new ContinueR();
    }
}
