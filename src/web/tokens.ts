import { TokenInfo } from "./models";

export const TOKENS: TokenInfo[] = [
    {name: 'ARGUMENT', label: 'Argument', type: 'value'},
    {name: 'CALL_DIAMOND', label: 'Diamond', type: 'value'},
    {name: 'CALL_INV_TRIANGLE', label: 'Inverse triangle', type: 'value'},

    {name: 'CALL_F', label: 'F function', type: 'action'},
    {name: 'CALL_G', label: 'G function', type: 'action'},
    {name: 'CALL_H', label: 'H function', type: 'action'},

    {name: 'DRAW_LINE', label: 'Line', type: 'action'},

    {name: 'DRAW_CIRCLE', label: 'Circle', type: 'action'},
    {name: 'DRAW_SQUARE', label: 'Square', type: 'action'},
    {name: 'DRAW_TRIANGLE', label: 'Triangle', type: 'action'},

    {name: 'DRAW_ARCLINE_R_3_4', label: 'Arc 3/4 (Right)', type: 'action'},
    {name: 'DRAW_ARCLINE_R_2_3', label: 'Arc 2/3 (Right)', type: 'action'},
    {name: 'DRAW_ARCLINE_R_1_2', label: 'Arc 1/2 (Right)', type: 'action'},
    {name: 'DRAW_ARCLINE_R_1_3', label: 'Arc 1/3 (Right)', type: 'action'},
    {name: 'DRAW_ARCLINE_R_1_4', label: 'Arc 1/4 (Right)', type: 'action'},
    {name: 'DRAW_ARCLINE_R_1_5', label: 'Arc 1/5 (Right)', type: 'action'},
    {name: 'DRAW_ARCLINE_L_3_4', label: 'Arc 3/4 (Left)', type: 'action'},
    {name: 'DRAW_ARCLINE_L_2_3', label: 'Arc 2/3 (Left)', type: 'action'},
    {name: 'DRAW_ARCLINE_L_1_2', label: 'Arc 1/2 (Left)', type: 'action'},
    {name: 'DRAW_ARCLINE_L_1_3', label: 'Arc 1/3 (Left)', type: 'action'},
    {name: 'DRAW_ARCLINE_L_1_4', label: 'Arc 1/4 (Left)', type: 'action'},
    {name: 'DRAW_ARCLINE_L_1_5', label: 'Arc 1/5 (Left)', type: 'action'},

    {name: 'MOVE_FORWARD', label: 'Move forward', type: 'action'},
    {name: 'MOVE_BACKWARD', label: 'Move backward', type: 'action'},
    {name: 'MOVE_LEFT', label: 'Move left', type: 'action'},
    {name: 'MOVE_RIGHT', label: 'Move right', type: 'action'},
    {name: 'ROTATE_LEFT', label: 'Rotate left', type: 'action'},
    {name: 'ROTATE_RIGHT', label: 'Rotate right', type: 'action'},

    {name: 'REVERSE', label: 'Reverse', type: 'action'},
    {name: 'REPLAY', label: 'Replay the last action', type: 'action'},
    {name: 'REPLAY_2', label: 'Replay the two last actions', type: 'action'},
    {name: 'REPLAY_3', label: 'Replay the three last actions', type: 'action'},
    {name: 'REPLAY_4', label: 'Replay the four last actions', type: 'action'},

    {name: 'COUNT_1', label: 'One', type: 'value'},
    {name: 'COUNT_2', label: 'Two', type: 'value'},
    {name: 'COUNT_3', label: 'Three', type: 'value'},
    {name: 'COUNT_5', label: 'Five', type: 'value'},
    {name: 'COUNT_7', label: 'Seven', type: 'value'},

    {name: 'COUNT_MINUS', label: 'Minus One', type: 'value'},
    {name: 'COUNT_GOLD', label: 'Golden Ratio', type: 'value'},
    {name: 'COUNT_SILVER', label: 'Silver Ratio', type: 'value'},
    {name: 'COUNT_BRONZE', label: 'Bronze Ratio', type: 'value'},
    {name: 'COUNT_PLASTIC', label: 'Plastic Number', type: 'value'},

    {name: 'FRACT_1_2', label: 'Half', type: 'value'},
    {name: 'FRACT_1_3', label: 'One Third', type: 'value'},
    {name: 'FRACT_2_3', label: 'Two Thirds', type: 'value'},
    {name: 'FRACT_1_4', label: 'One Quarter', type: 'value'},
    {name: 'FRACT_3_4', label: 'Three quarters', type: 'value'},
    {name: 'FRACT_1_5', label: 'One Fifth', type: 'value'},
    {name: 'FRACT_2_5', label: 'Two Fifth', type: 'value'},
    {name: 'FRACT_3_5', label: 'Three Fifth', type: 'value'},
    {name: 'FRACT_4_5', label: 'Four Fifth', type: 'value'},

    {name: 'ANGLE_270', label: '270°', type: 'value'},
    {name: 'ANGLE_180', label: '180°', type: 'value'},
    {name: 'ANGLE_90', label: '90°', type: 'value'},
    {name: 'ANGLE_60', label: '60°', type: 'value'},
    {name: 'ANGLE_45', label: '45°', type: 'value'},
    {name: 'ANGLE_30', label: '30°', type: 'value'},
    {name: 'ANGLE_15', label: '15°', type: 'value'},
    {name: 'ANGLE_10', label: '10°', type: 'value'},

    {name: 'OP_MULT', label: 'Multiple operator', type: 'value'},
    {name: 'OP_ADD', label: 'Addition operator', type: 'value'},
    {name: 'OP_SUB', label: 'Subtraction operator', type: 'value'},
    {name: 'COLOR_MAX', label: 'Second Color', type: 'value'},
    {name: 'COLOR_MIN', label: 'First Color', type: 'value'},
    {name: 'COLOR_FILL', label: 'Filled Figure', type: 'value'},
    {name: 'COLOR_EMPTY', label: 'Transparent Figure', type: 'value'},
    {name: 'COLOR_SHIFT_1_2', label: 'Change Color', type: 'value'},
    {name: 'COLOR_SHIFT_1_4', label: 'Change Color', type: 'value'},
    {name: 'COLOR_SHIFT_1_5', label: 'Change Color', type: 'value'},
    {name: 'COLOR_SHIFT_1_10', label: 'Change Color', type: 'value'},
    {name: 'STROKE_THICK_ADD', label: 'Thick stroke', type: 'value'},
    {name: 'STROKE_THICK_SUB', label: 'Thin stroke', type: 'value'},
];

export const NAME_TO_TOKEN = new Map<string, TokenInfo>(
    TOKENS.map(token => [token.name, token])
);
