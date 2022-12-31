import { Cursor } from "@/core/cursor";
import { ValueNode } from "@/core/ast/base";

export type StrokeStyle = "solid" | "dotted" | "dashed";

export interface EvaluedValue {
    value?: number;
    color?: number;
    strokeStyle?: StrokeStyle;
    strokeThickness?: number;
    isFilled?: boolean;
    valueTransformer?: (a: number, b: number) => number;
}

export class Context {
    readonly iteration: number;
    readonly argument: EvaluedValue;
    readonly cursor: Cursor;
    readonly valueFuncBag: {[name: string]: ValueNode[]};

    constructor({cursor, argument, valueFuncBag = {}, iteration = 0}) {
        this.argument = argument;
        this.iteration = iteration;
        this.valueFuncBag = valueFuncBag;
        this.cursor = cursor;
    }

    createNewContext(newArgument: EvaluedValue, iterationShift: number) {
        return new Context({
            argument: newArgument,
            cursor: this.cursor,
            iteration: this.iteration + iterationShift,
            valueFuncBag: this.valueFuncBag,
        });
    }
}
