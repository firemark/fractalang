import { Context, EvaluedValue } from "../context";
import type { StrokeStyle } from "../context";
import { ValueNode } from "./base";

export class SetStrokeStyle extends ValueNode {
    private stroke: StrokeStyle;

    constructor(stroke) {
        super();
        this.stroke = stroke;
    }

    eval(context: Context): EvaluedValue {
        return { strokeStyle: this.stroke };
    }
}


export class ShiftStrokeThickness extends ValueNode {
    private shift: number;

    constructor(shift) {
        super();
        this.shift = shift;
    }

    eval(context: Context): EvaluedValue {
        const strokeThickness = context.argument.strokeThickness + this.shift;
        return { strokeThickness };
    }
}
