import { Context } from "./context";

export interface Node {}

export abstract class ValueNode implements Node {
    abstract eval(context: Context): number;
}

export abstract class ActionNode implements Node {
    abstract exec(context: Context);
}
