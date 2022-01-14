import { Context } from "../context";
import { Node, ValueNode } from "./base";

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
