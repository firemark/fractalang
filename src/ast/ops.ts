import { Context, EvaluedValue } from "../context";
import { ValueNode } from "./base";

export class MultOp extends ValueNode {
    eval(context: Context): EvaluedValue {
        return { valueTransformer: (a, b) => a * b };
    }
}

export class AddOp extends ValueNode {
    eval(context: Context): EvaluedValue {
        return { valueTransformer: (a, b) => a + b };
    }
}

export class SubOp extends ValueNode {
    eval(context: Context): EvaluedValue {
        return { valueTransformer: (a, b) => a - b };
    }
}
