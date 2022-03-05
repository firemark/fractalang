import { Context, EvaluedValue } from "../context";
import { ValueNode, evalValue } from "./base";

export class Angle extends ValueNode {
    private normalizedAngle: number;

    constructor(angle: number) {
        super();
        this.normalizedAngle = angle / 360.0;
    }

    eval(context: Context): EvaluedValue {
        return {value: this.normalizedAngle};
    }
}

export class Multipler extends ValueNode {
    private value: number;

    constructor(value) {
        super();
        this.value = value;
    }

    eval(context: Context): EvaluedValue {
        return {value: this.value};
    }
}

export class Argument extends ValueNode {
    eval(context: Context): EvaluedValue {
        return {value: context.argument.value};
    }
}

export class DynamicArgument extends ValueNode {
    private name: string;

    constructor(name) {
        super();
        this.name = name;
    }

    eval(context: Context): EvaluedValue {
        const valueNodes = context.findFunction(this.name);
        if (!Array.isArray(valueNodes)) {
            return {};
        }
        return evalValue(valueNodes, context);
    }
}
