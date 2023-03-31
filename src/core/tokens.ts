import { ValueNode, ActionNode } from "@/core/ast/base";
import { Multipler, Angle, Argument, DynamicArgument } from "@/core/ast/values";
import { Shape } from "@/core/cursor";
import * as actions from "@/core/ast/actions";
import * as colors from "@/core/ast/colors";
import * as strokes from "@/core/ast/strokes";
import * as ops from "@/core/ast/ops";

export type ActionCb = (values: ValueNode[]) => ActionNode;
export type ValueCb = () => ValueNode;

export class Token {
    isAction: boolean;
    isDynamic: boolean;
    factory: ActionCb | ValueCb;

    constructor({ isAction, isDynamic, factory }) {
        this.isAction = isAction;
        this.isDynamic = isDynamic;
        this.factory = factory;
    }
}

function createValue(factory: ValueCb, isDynamic = false) {
    return new Token({ isAction: false, isDynamic, factory });
}

function createAction(factory: ActionCb) {
    return new Token({ isAction: true, isDynamic: true, factory });
}

export const tokens = {
    // *** Values ***
    // Counts
    COUNT_1: createValue(() => new Multipler(1)),
    COUNT_2: createValue(() => new Multipler(2)),
    COUNT_3: createValue(() => new Multipler(3)),
    COUNT_5: createValue(() => new Multipler(5)),
    COUNT_7: createValue(() => new Multipler(7)),
    // Counts (special)
    COUNT_MINUS: createValue(() => new Multipler(-1)),
    COUNT_GOLD: createValue(() => new Multipler(1.618033989)),
    COUNT_SILVER: createValue(() => new Multipler(2.414213562)),
    COUNT_BRONZE: createValue(() => new Multipler(3.302775638)),
    COUNT_PLASTIC: createValue(() => new Multipler(1.3247179572)),
    // Fractions
    FRACT_1_2: createValue(() => new Multipler(1 / 2)),
    FRACT_1_3: createValue(() => new Multipler(1 / 3)),
    FRACT_2_3: createValue(() => new Multipler(2 / 3)),
    FRACT_1_4: createValue(() => new Multipler(1 / 4)),
    FRACT_3_4: createValue(() => new Multipler(3 / 4)),
    FRACT_1_5: createValue(() => new Multipler(1 / 5)),
    FRACT_2_5: createValue(() => new Multipler(2 / 5)),
    FRACT_3_5: createValue(() => new Multipler(3 / 5)),
    FRACT_4_5: createValue(() => new Multipler(4 / 5)),
    // Angles
    //ANGLE_360: createValue(() => new Angle(360)),
    ANGLE_270: createValue(() => new Angle(270)),
    ANGLE_180: createValue(() => new Angle(180)),
    ANGLE_90: createValue(() => new Angle(90)),
    ANGLE_60: createValue(() => new Angle(60)),
    ANGLE_45: createValue(() => new Angle(45)),
    ANGLE_30: createValue(() => new Angle(30)),
    ANGLE_15: createValue(() => new Angle(15)),
    ANGLE_10: createValue(() => new Angle(10)),
    // Colors
    COLOR_MAX: createValue(() => new colors.MaxColor()),
    COLOR_MIN: createValue(() => new colors.MinColor()),
    COLOR_SHIFT_1_2: createValue(() => new colors.ShiftColor(1 / 2)),
    COLOR_SHIFT_1_4: createValue(() => new colors.ShiftColor(1 / 4)),
    COLOR_SHIFT_1_5: createValue(() => new colors.ShiftColor(1 / 5)),
    COLOR_SHIFT_1_10: createValue(() => new colors.ShiftColor(1 / 10)),
    COLOR_FILL: createValue(() => new colors.FillColor()),
    COLOR_EMPTY: createValue(() => new colors.EmptyColor()),
    // Stroke
    STROKE_SOLID: createValue(() => new strokes.SetStrokeStyle("solid")),
    STROKE_DASHED: createValue(() => new strokes.SetStrokeStyle("dashed")),
    STROKE_DOTTED: createValue(() => new strokes.SetStrokeStyle("dotted")),
    STROKE_THICK_ADD: createValue(() => new strokes.ShiftStrokeThickness(+1)),
    STROKE_THICK_SUB: createValue(() => new strokes.ShiftStrokeThickness(-1)),
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
    CALL_F: createAction(v => new actions.Call("F", v)),
    CALL_G: createAction(v => new actions.Call("G", v)),
    CALL_H: createAction(v => new actions.Call("H", v)),
    // Close Callers
    CLOSE_CALL_F: createAction(v => new actions.CloseCall("F", v)),
    CLOSE_CALL_G: createAction(v => new actions.CloseCall("G", v)),
    CLOSE_CALL_H: createAction(v => new actions.CloseCall("H", v)),
    // Shapes
    DRAW_CIRCLE: createAction(v => new actions.DrawFigure(v, Shape.Circle)),
    DRAW_SQUARE: createAction(v => new actions.DrawFigure(v, Shape.Square)),
    DRAW_TRIANGLE: createAction(v => new actions.DrawFigure(v, Shape.Triangle)),
    // Line
    DRAW_LINE: createAction(v => new actions.DrawLine(v)),
    // Arc
    DRAW_ARCLINE_R_3_4: createAction(v => new actions.DrawArcLine(+3 / 4, v)),
    DRAW_ARCLINE_R_2_3: createAction(v => new actions.DrawArcLine(+2 / 3, v)),
    DRAW_ARCLINE_R_1_2: createAction(v => new actions.DrawArcLine(+1 / 2, v)),
    DRAW_ARCLINE_R_1_3: createAction(v => new actions.DrawArcLine(+1 / 3, v)),
    DRAW_ARCLINE_R_1_4: createAction(v => new actions.DrawArcLine(+1 / 4, v)),
    DRAW_ARCLINE_R_1_5: createAction(v => new actions.DrawArcLine(+1 / 5, v)),
    DRAW_ARCLINE_L_3_4: createAction(v => new actions.DrawArcLine(-3 / 4, v)),
    DRAW_ARCLINE_L_2_3: createAction(v => new actions.DrawArcLine(-2 / 3, v)),
    DRAW_ARCLINE_L_1_2: createAction(v => new actions.DrawArcLine(-1 / 2, v)),
    DRAW_ARCLINE_L_1_3: createAction(v => new actions.DrawArcLine(-1 / 3, v)),
    DRAW_ARCLINE_L_1_4: createAction(v => new actions.DrawArcLine(-1 / 4, v)),
    DRAW_ARCLINE_L_1_5: createAction(v => new actions.DrawArcLine(-1 / 5, v)),
    // Cursor translations
    MOVE_FORWARD: createAction(v => new actions.MoveForward(v)),
    MOVE_BACKWARD: createAction(v => new actions.MoveBackward(v)),
    MOVE_LEFT: createAction(v => new actions.MoveLeft(v)),
    MOVE_RIGHT: createAction(v => new actions.MoveRight(v)),
    // Cursor rotations
    ROTATE_LEFT: createAction(v => new actions.RotateLeft(v)),
    ROTATE_RIGHT: createAction(v => new actions.RotateRight(v)),

    // Repetetive actions
    REVERSE: createAction(v => new actions.Reverse(v)),
    REPLAY: createAction(v => new actions.Replay(v)),
    REPLAY_2: createAction(v => new actions.Replay(v, 2)),
    REPLAY_3: createAction(v => new actions.Replay(v, 3)),
    REPLAY_4: createAction(v => new actions.Replay(v, 4)),
};
