import { ICursor } from "@/core/cursor";
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
    readonly cursor: ICursor;
    readonly valueFuncBag: {[name: string]: ValueNode[]};

    constructor({cursor, argument, valueFuncBag = {}, iteration = 0}) {
        this.argument = argument;
        this.iteration = iteration;
        this.valueFuncBag = valueFuncBag;
        this.cursor = cursor;
    }

    onEnd() {
        this.cursor.close();
    }
}
