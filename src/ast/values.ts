import { Context } from "../context";
import { Node, ValueNode, evalValue } from "./base";

export class Angle extends ValueNode {
    private normalizedAngle: number;

    constructor(angle: number) {
        super();
        this.normalizedAngle = angle / 360.0;
    }

    eval(context: Context): number {
        return this.normalizedAngle;
    }
}

export class Multipler extends ValueNode {
    private value: number;

    constructor(value) {
        super();
        this.value = value;
    }

    eval(context: Context): number {
        return this.value;
    }
}

export class Argument extends ValueNode {
    eval(context: Context): number {
        return context.argument;
    }
}

export class DynamicArgument extends ValueNode {
    private name: string;

    constructor(name) {
        super();
        this.name = name;
    }

    eval(context: Context): number {
        const valueNodes = context.findFunction(this.name);
        if (!Array.isArray(valueNodes)) {
            return 1.0;
        }
        return evalValue(valueNodes, context);
    }
}
