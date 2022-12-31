import { Context, EvaluedValue } from "@/core/context";
import { ActionResult, ContinueR } from "./actionResult";

export abstract class ValueNode {
    abstract eval(context: Context): EvaluedValue;
}

export abstract class ActionNode {
    abstract exec(context: Context, local: object): ActionResult;
    execReverse(context: Context, local: object): ActionResult { return new ContinueR(); };
}

export function evalValue(valueNodes: ValueNode[], context: Context): EvaluedValue {
    const init: EvaluedValue = {
        value: 1.0,
        color: context.argument.color,
        strokeStyle: context.argument.strokeStyle,
        strokeThickness: context.argument.strokeThickness,
        isFilled: context.argument.isFilled,
        valueTransformer: (a: number, b:number) => a * b,
    };
    return valueNodes.reduce(partEval.bind(this, context), init);
}

function partEval(context: Context, acc: EvaluedValue, node: ValueNode): EvaluedValue {
    const newValue = node.eval(context);
    const transform = newValue.valueTransformer || acc.valueTransformer;
    return {
        value: newValue.value !== undefined ? transform(acc.value, newValue.value) : acc.value,
        color: newValue.color !== undefined ? newValue.color : acc.color,
        strokeStyle: newValue.strokeStyle !== undefined ? newValue.strokeStyle : acc.strokeStyle,
        strokeThickness: newValue.strokeThickness !== undefined ? newValue.strokeThickness : acc.strokeThickness,
        isFilled: newValue.isFilled !== undefined ? newValue.isFilled : acc.isFilled,
        valueTransformer: transform,
    }
}
