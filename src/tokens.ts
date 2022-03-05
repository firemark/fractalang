import { Node, ValueNode, ActionNode } from "./ast/base";
import { Multipler, Angle, Argument, DynamicArgument } from "./ast/values";
import * as actions from "./ast/actions";
import * as colors from "./ast/colors";
import * as ops from "./ast/ops";

export type ActionCb = (values: ValueNode[]) => ActionNode;
export type ValueCb = () => ValueNode;
export type ValueSize = "+" | number;

export class Token {
    isAction: boolean;
    isDynamic: boolean;
    factory: ActionCb | ValueCb;
    valueSize: ValueSize;

    constructor({ isAction, isDynamic, factory, valueSize }) {
        this.isAction = isAction;
        this.isDynamic = isDynamic;
        this.factory = factory;
        this.valueSize = valueSize;
    }
}

function createValue(factory: ValueCb, isDynamic = false) {
    return new Token({ isAction: false, valueSize: 0, isDynamic, factory });
}

function createAction(valueSize: ValueSize, factory: ActionCb) {
    return new Token({ isAction: true, valueSize, isDynamic: true, factory });
}

export const tokens = {
    // *** Values ***
    // Counts
    COUNT_MINUS: createValue(() => new Multipler(-1)),
    COUNT_1: createValue(() => new Multipler(1)),
    COUNT_2: createValue(() => new Multipler(2)),
    COUNT_3: createValue(() => new Multipler(3)),
    COUNT_5: createValue(() => new Multipler(5)),
    // Fractions
    FRACT_1_2: createValue(() => new Multipler(1 / 2)),
    FRACT_1_3: createValue(() => new Multipler(1 / 3)),
    FRACT_2_3: createValue(() => new Multipler(2 / 3)),
    FRACT_1_4: createValue(() => new Multipler(1 / 4)),
    FRACT_3_4: createValue(() => new Multipler(3 / 4)),
    FRACT_1_5: createValue(() => new Multipler(1 / 5)),
    // Angles
    //ANGLE_360: createValue(() => new Angle(360)),
    ANGLE_270: createValue(() => new Angle(270)),
    ANGLE_180: createValue(() => new Angle(180)),
    ANGLE_90: createValue(() => new Angle(90)),
    ANGLE_60: createValue(() => new Angle(60)),
    ANGLE_45: createValue(() => new Angle(45)),
    ANGLE_30: createValue(() => new Angle(30)),
    ANGLE_15: createValue(() => new Angle(15)),
    // Colors
    COLOR_MAX: createValue(() => new colors.MaxColor()),
    COLOR_MIN: createValue(() => new colors.MinColor()),
    COLOR_SHIFT_1_2: createValue(() => new colors.ShiftColor(1 / 2)),
    COLOR_SHIFT_1_4: createValue(() => new colors.ShiftColor(1 / 4)),
    COLOR_SHIFT_1_5: createValue(() => new colors.ShiftColor(1 / 5)),
    COLOR_SHIFT_1_10: createValue(() => new colors.ShiftColor(1 / 10)),
    // Operations
    OP_MULT: createValue(() => new ops.MultOp()),
    OP_ADD: createValue(() => new ops.AddOp()),
    OP_SUB: createValue(() => new ops.SubOp()),
    // Arguments
    ARGUMENT: createValue(() => new Argument()),
    CALL_DIAMOND: createValue(() => new DynamicArgument("DIAMOND"), true),
    CALL_INV_TRIANGLE: createValue(() => new DynamicArgument("INV_TRIANGLE"), true),

    // *** Actions ***
    // Callers
    CALL_F: createAction("+", v => new actions.Call("F", v)),
    CALL_G: createAction("+", v => new actions.Call("G", v)),
    CALL_H: createAction("+", v => new actions.Call("H", v)),
    // Painters
    DRAW_LINE: createAction("+", v => new actions.DrawLine(v)),
    DRAW_CIRCLE: createAction("+", v => new actions.DrawCircle(v)),
    DRAW_SQUARE: createAction("+", v => new actions.DrawSquare(v)),
    DRAW_TRIANGLE: createAction("+", v => new actions.DrawTriangle(v)),
    DRAW_ARCLINE_R_3_4: createAction("+", v => new actions.DrawArcLine(+3 / 4, v)),
    DRAW_ARCLINE_R_1_2: createAction("+", v => new actions.DrawArcLine(+1 / 2, v)),
    DRAW_ARCLINE_R_1_4: createAction("+", v => new actions.DrawArcLine(+1 / 4, v)),
    DRAW_ARCLINE_L_3_4: createAction("+", v => new actions.DrawArcLine(-3 / 4, v)),
    DRAW_ARCLINE_L_1_2: createAction("+", v => new actions.DrawArcLine(-1 / 2, v)),
    DRAW_ARCLINE_L_1_4: createAction("+", v => new actions.DrawArcLine(-1 / 4, v)),
    // Cursor Operators
    FORWARD: createAction("+", v => new actions.Forward(v)),
    ROTATE_LEFT: createAction("+", v => new actions.RotateLeft(v)),
    ROTATE_RIGHT: createAction("+", v => new actions.RotateRight(v)),
    REVERSE: createAction("+", v => new actions.Reverse(v)),
    REPLAY: createAction("+", v => new actions.Replay(v)),
};
