import { Node, ValueNode, ActionNode } from "./ast_base";
import { Multipler, Angle, Argument } from "./ast_value";
import * as actions from "./ast";

export type ActionCb = (values: ValueNode[]) => ActionNode;
export type ValueCb = () => ValueNode;
export type ValueSize = "+" | number;

export class Token {
    isAction: boolean;
    factory: ActionCb | ValueCb;
    valueSize: ValueSize;

    constructor({ isAction, factory, valueSize }) {
        this.isAction = isAction;
        this.factory = factory;
        this.valueSize = valueSize;
    }
}

function createValue(factory: ValueCb) {
    return new Token({ isAction: false, valueSize: 0, factory });
}

function createAction(valueSize: ValueSize, factory: ActionCb) {
    return new Token({ isAction: true, valueSize, factory });
}

export const tokens = {
    // *** Values ***
    // Counts
    COUNT_1: createValue(() => new Multipler(1)),
    COUNT_2: createValue(() => new Multipler(2)),
    COUNT_3: createValue(() => new Multipler(3)),
    // Fractions
    FRACT_1_2: createValue(() => new Multipler(1 / 2)),
    FRACT_1_3: createValue(() => new Multipler(1 / 3)),
    FRACT_2_3: createValue(() => new Multipler(2 / 3)),
    FRACT_1_4: createValue(() => new Multipler(1 / 4)),
    FRACT_3_4: createValue(() => new Multipler(3 / 4)),
    FRACT_1_5: createValue(() => new Multipler(1 / 5)),
    // Angles
    ANGLE_360: createValue(() => new Angle(360)),
    ANGLE_270: createValue(() => new Angle(270)),
    ANGLE_180: createValue(() => new Angle(180)),
    ANGLE_90: createValue(() => new Angle(90)),
    ANGLE_60: createValue(() => new Angle(60)),
    ANGLE_45: createValue(() => new Angle(45)),
    ANGLE_30: createValue(() => new Angle(30)),
    // Arguments
    ARGUMENT: createValue(() => new Argument()),

    // *** Actions ***
    // Callers
    CALL_F: createAction("+", v => new actions.Call("F", v)),
    CALL_G: createAction("+", v => new actions.Call("G", v)),
    CALL_H: createAction("+", v => new actions.Call("H", v)),
    // Painters
    DRAW_LINE: createAction("+", v => new actions.DrawLine(v)),
    // Cursor Operators
    FORWARD: createAction("+", v => new actions.Forward(v)),
    ROTATE_LEFT: createAction("+", v => new actions.RotateLeft(v)),
    ROTATE_RIGHT: createAction("+", v => new actions.RotateRight(v)),
};
