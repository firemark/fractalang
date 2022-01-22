import { Context } from "../context";

export interface Node {}

export abstract class ValueNode implements Node {
    abstract eval(context: Context): number;
}

export interface ActionResult {
    shift?: number;
    reverse?: number;
}

export abstract class ActionNode implements Node {
    abstract exec(context: Context): ActionResult;
    execReverse(context: Context) {};
}

