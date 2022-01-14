import { Context } from "../context";
import { Node, ValueNode, ActionNode } from "./base";

export class Function implements Node {
    name: string;
    actions: ActionNode[];

    constructor(name, actions) {
        this.name = name;
        this.actions = actions;
    }

    exec(context: Context) {
        this.actions.forEach(o => o.exec(context));
    }
}

abstract class NodeWithValue extends ActionNode {
    private value: ValueNode[];

    constructor(value) {
        super();
        this.value = value;
    }

    protected eval(context: Context): number {
        return this.value.reduce((acc, v) => acc * v.eval(context), 1.0);
    }
}

export class Call extends NodeWithValue {
    private name: string;

    constructor(name, value) {
        super(value);
        this.name = name;
    }

    exec(context: Context) {
        const func = context.findFunction(this.name);
        if (!func) {
            return;
        }
        const newArgument = this.eval(context);
        const newContext = context.createNewContext(newArgument);
        func.exec(newContext);
    }
}

export class DrawLine extends NodeWithValue {
    exec(context: Context) {
        const distance = this.eval(context);
        context.getCursor().drawLine(distance);
    }
}

export class DrawCircle extends NodeWithValue {
    exec(context: Context) {
        const distance = this.eval(context);
        context.getCursor().drawCircle(distance);
    }
}

export class Forward extends NodeWithValue {
    exec(context: Context) {
        const distance = this.eval(context);
        context.getCursor().forward(distance);
    }
}

export class RotateLeft extends NodeWithValue {
    exec(context: Context) {
        const angle = -this.eval(context);
        context.getCursor().rotate(angle);
    }
}

export class RotateRight extends NodeWithValue {
    exec(context: Context) {
        const angle = this.eval(context);
        context.getCursor().rotate(angle);
    }
}
