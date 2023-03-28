import { TokenCategory } from "./models";

export const ACTION_TOKENS: TokenCategory[] = [
    {
        label: 'Functions',
        tokens: [
            'ARGUMENT',
            'CALL_DIAMOND',
            'CALL_F',
            'CALL_G',
            'CALL_H',
        ],
    },
    {
        label: 'Painters',
        tokens: [
            'DRAW_LINE',
            'DRAW_TRIANGLE',
            'DRAW_ARCLINE_L_1_2',
            'DRAW_ARCLINE_R_1_2',
        ],
    },
    {
        label: 'Cursor',
        tokens: [
            'MOVE_FORWARD',
            'ROTATE_LEFT',
            'ROTATE_RIGHT',
            'REVERSE',
            'REPLAY',
        ],
    },
];

export const VALUE_TOKENS: TokenCategory[] = [
    {
        label: 'Counters',
        tokens: [
            'COUNT_2',
            'COUNT_3',
            'COUNT_5',
            'COUNT_MINUS',
        ],
    },
    {
        label: 'Fractions',
        tokens: [
            'FRACT_1_2',
            'FRACT_1_3',
            'FRACT_1_4',
            'FRACT_1_5',
        ],
    },
    {
        label: 'Angles',
        tokens: [
            'ANGLE_180',
            'ANGLE_90',
            'ANGLE_60',
            'ANGLE_45',
            'ANGLE_30',
        ],
    },
    {
        label: 'Colors',
        tokens: [
            'COLOR_FILL',
            'COLOR_EMPTY',,
            'COLOR_SHIFT_1_2',
            'COLOR_SHIFT_1_4',
            'COLOR_SHIFT_1_5',
            'COLOR_SHIFT_1_10',
            'COLOR_MAX',
            'COLOR_MIN',
        ],
    },
    {
        label: 'Strokes',
        tokens: [
            'STROKE_THICK_ADD',
            'STROKE_THICK_SUB',
        ],
    },
    {
        label: 'Modificators',
        tokens: [
            'OP_MULT',
            'OP_ADD',
            'OP_SUB',
        ],
    },
];