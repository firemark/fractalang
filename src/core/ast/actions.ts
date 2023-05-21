import { Context, EvaluedValue } from "@/core/context";
import { CloseCursor, Shape, ICursor, OpsParams } from "@/core/cursor";
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
    #name: string;

    constructor(name, value) {
        super(value);
        this.#name = name;
    }

    exec(context: Context): ActionResult {
        return new CallR(this.#name, this.createContext(context));
    }

    execReverse(context: Context): ActionResult {
        return this.exec(context);
    }

    protected createContext(context: Context): Context {
        return new Context({
            argument: this.eval(context),
            cursor: this.createCursor(context),
            iteration: context.iteration + 1,
            valueFuncBag: context.valueFuncBag,
        });
    }

    protected createCursor(context: Context): ICursor {
        return context.cursor;
    }
}

function evaledToFigureOps(evaled: EvaluedValue): OpsParams {
    return {
        isFilled: evaled.isFilled,
        color: evaled.color,
        stroke: evaled.strokeThickness,
    };
}

export class CloseCall extends Call {
    protected createCursor(context: Context): ICursor {
        const evaled = this.eval(context);
        return new CloseCursor(context.cursor, evaledToFigureOps(evaled));
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

export class DrawFigure extends NodeWithValue {
    #shape: Shape

    constructor(values: ValueNode[], shape: Shape) {
        super(values);
        this.#shape = shape;
    }

    exec(context: Context): ActionResult {
        const evaled = this.eval(context);
        const size = evaled.value;
        context.cursor.drawShape(this.#shape, size, evaledToFigureOps(evaled));
        return new ContinueR();
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
    abstract change(cursor: ICursor, value: number): void;

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
    change(cursor: ICursor, value: number) {
        cursor.forward(value);
    }
}

export class MoveBackward extends CursorManipulator {
    change(cursor: ICursor, value: number) {
        cursor.backward(value);
    }
}

export class MoveLeft extends CursorManipulator {
    change(cursor: ICursor, value: number) {
        cursor.left(value);
    }
}

export class MoveRight extends CursorManipulator {
    change(cursor: ICursor, value: number) {
        cursor.right(value);
    }
}

export class RotateRight extends CursorManipulator {
    change(cursor: ICursor, value: number) {
        cursor.rotate(value);
    }
}

export class RotateLeft extends CursorManipulator {
    change(cursor: ICursor, value: number) {
        cursor.rotate(-value);
    }
}

export class FlipVertically extends CursorManipulator {
    change(cursor: ICursor) {
        cursor.flip();
    }
}

export class FlipHorizontally extends CursorManipulator {
    change(cursor: ICursor) {
        cursor.rotate(0.5);
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
    #jumpSize: number;

    constructor(value, jumpSize = 1) {
        super(value);
        this.#jumpSize = jumpSize;
    }

    exec(context: Context, local: object): ActionResult {
        const counter = local['counter'] || 1;
        const size = this.evalIntValue(context);
        if (counter < size) {
            local['counter'] = counter + 1;
            return new JumpR(-this.#jumpSize);
        }
        return new ContinueR();
    }
}
