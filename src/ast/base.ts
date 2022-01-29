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
    execReverse(context: Context) {};
}

export function evalValue(valueNodes: ValueNode[], context: Context): EvaluedValue {
    const init: EvaluedValue = {
        value: 1.0,
        color: 0.0,
        stroke: "solid",
        valueTransformer: (a: number, b:number) => a * b,
    };
    return valueNodes.reduce(partEval.bind(this, context), init);
}

function partEval(context: Context, acc: EvaluedValue, node: ValueNode): EvaluedValue {
    const newValue = node.eval(context);
    const transform = newValue.valueTransformer || acc.valueTransformer;
    return {
        value: newValue.value !== undefined ? transform(newValue.value, acc.value) : acc.value,
        color: newValue.color !== undefined ? newValue.color : acc.color,
        stroke: newValue.stroke !== undefined ? newValue.stroke : acc.stroke,
        valueTransformer: transform,
    }
}
