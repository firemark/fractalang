import { Context, EvaluedValue } from "../context";

export interface Node {}

export abstract class ValueNode implements Node {
    abstract eval(context: Context): EvaluedValue;
}

export interface ActionResult {
    shift?: number;
    reverse?: number;
}

export abstract class ActionNode implements Node {
    abstract exec(context: Context, local: any): ActionResult;
    execReverse(context: Context): number { return 0; };
}

export function evalValue(valueNodes: ValueNode[], context: Context): EvaluedValue {
    const init: EvaluedValue = {
        value: 1.0,
        color: context.argument.color,
        strokeStyle: context.argument.strokeStyle,
        strokeThickness: context.argument.strokeThickness,
        valueTransformer: (a: number, b:number) => a * b,
    };
    const argument = valueNodes.reduce(partEval.bind(this, context), init);
    if (context.reverseValue) {
        argument.value *= -1.0;
    }
    return argument;
}

function partEval(context: Context, acc: EvaluedValue, node: ValueNode): EvaluedValue {
    const newValue = node.eval(context);
    const transform = newValue.valueTransformer || acc.valueTransformer;
    return {
        value: newValue.value !== undefined ? transform(acc.value, newValue.value) : acc.value,
        color: newValue.color !== undefined ? newValue.color : acc.color,
        strokeStyle: newValue.strokeStyle !== undefined ? newValue.strokeStyle : acc.strokeStyle,
        strokeThickness: newValue.strokeThickness !== undefined ? newValue.strokeThickness : acc.strokeThickness,
        valueTransformer: transform,
    }
}
