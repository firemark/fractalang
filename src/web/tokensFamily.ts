
export const TOKEN_FAMILIES = {
    CALL: ['CALL_F', 'CALL_G', 'CALL_H'],
    ARGUMENT: ['ARGUMENT', 'CALL_DIAMOND', 'CALL_INV_TRIANGLE'],
    DRAW_SHAPE: ['DRAW_CIRCLE', 'DRAW_SQUARE', 'DRAW_TRIANGLE'],
    DRAW_LINE: [
        'DRAW_LINE',
        'DRAW_ARCLINE_R_3_4',
        'DRAW_ARCLINE_R_1_2',
        'DRAW_ARCLINE_R_1_4',
        'DRAW_ARCLINE_L_3_4',
        'DRAW_ARCLINE_L_1_2',
        'DRAW_ARCLINE_L_1_4',
    ],
    MOVE: ['MOVE_FORWARD', 'MOVE_BACKWARD', 'MOVE_LEFT', 'MOVE_RIGHT'],
    ROTATE: ['ROTATE_LEFT', 'ROTATE_RIGHT'],
    REPLAY: ['REPLAY', 'REPLAY_2', 'REPLAY_3'],
    COUNTER: ['COUNT_1', 'COUNT_2', 'COUNT_3', 'COUNT_5', 'COUNT_MINUS'],
    FRACTION: [
        'FRACT_1_2',
        'FRACT_1_3',
        'FRACT_2_3',
        'FRACT_1_4',
        'FRACT_3_4',
        'FRACT_1_5',
    ],
    ANGLE: [
        'ANGLE_270',
        'ANGLE_180',
        'ANGLE_90',
        'ANGLE_60',
        'ANGLE_45',
        'ANGLE_30',
        'ANGLE_15',
    ],
    OP: ['OP_MULT', 'OP_ADD', 'OP_SUB'],
    COLOR: [
        'COLOR_MAX',
        'COLOR_MIN',
        'COLOR_FILL',
        'COLOR_EMPTY',
        'COLOR_SHIFT_1_2',
        'COLOR_SHIFT_1_4',
        'COLOR_SHIFT_1_5',
        'COLOR_SHIFT_1_10',
    ],
    STROKE: [
        'STROKE_THICK_ADD',
        'STROKE_THICK_SUB',
    ],
};

export const NAME_TO_FAMILY = new Map<string, string>(
    Object.entries(TOKEN_FAMILIES) 
        .map(([name, family]) => family.map(token => [token, name]))
        .flat() as [string, string][]
);
