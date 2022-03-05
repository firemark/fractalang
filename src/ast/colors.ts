import { Context, EvaluedValue } from "../context";
import { ValueNode } from "./base";

export class MaxColor extends ValueNode {
    eval(context: Context): EvaluedValue {
        return {color: 1.0};
    }
}

export class MinColor extends ValueNode {
    eval(context: Context): EvaluedValue {
        return {color: 0.0};
    }
}

export class ShiftColor extends ValueNode {
    private shift: number;

    constructor(shift) {
        super();
        this.shift = shift;
    }

    eval(context: Context): EvaluedValue {
        let color = (context.argument.color + this.shift) % 1.0;
        if (color < 0.0) {
            color += 1.0;
        }
        return {color};
    }
}

