import { TokenCategory } from "./models";

export const TOKEN_FAMILIES: { [key: string]: TokenCategory[] } = {
    ARGUMENT: [
        {
            label: 'Arguments',
            tokens: ['ARGUMENT', 'CALL_DIAMOND', 'CALL_INV_TRIANGLE'],
        },
    ],
    CALL: [
        {
            label: 'Callers',
            tokens: ['CALL_F', 'CALL_G', 'CALL_H'],
        },
    ],
    DRAW_SHAPE: [
        {
            label: 'Shapes',
            tokens: ['DRAW_CIRCLE', 'DRAW_SQUARE', 'DRAW_TRIANGLE'],
        }
    ],
    DRAW_LINE: [
        {
            label: 'Line',
            tokens: ['DRAW_LINE'],
        },
        {
            label: 'Left Arclines',
            tokens: [
                'DRAW_ARCLINE_L_3_4',
                'DRAW_ARCLINE_L_1_2',
                'DRAW_ARCLINE_L_1_4',
            ]
        },
        {
            label: 'Right Arclines',
            tokens: [
                'DRAW_ARCLINE_R_3_4',
                'DRAW_ARCLINE_R_1_2',
                'DRAW_ARCLINE_R_1_4',
            ]
        },
    ],
    MOVE: [
        {
            label: 'Moves',
            tokens: ['MOVE_FORWARD', 'MOVE_BACKWARD', 'MOVE_LEFT', 'MOVE_RIGHT'],
        },
    ],
    ROTATE: [
        {
            label: 'Rotates',
            tokens: ['ROTATE_LEFT', 'ROTATE_RIGHT'],
        },
    ],
    REPLAY: [
        {
            label: 'Replays',
            tokens: ['REPLAY', 'REPLAY_2', 'REPLAY_3'],
        },
    ],
    VALUE: [
        {
            label: 'Counters',
            tokens: ['COUNT_1', 'COUNT_2', 'COUNT_3', 'COUNT_5', 'COUNT_MINUS'],
        },
        {
            label: 'Fractions',
            tokens: [
                'FRACT_1_2',
                'FRACT_1_3',
                'FRACT_2_3',
            ],
        },
        {
            label: 'Fractions',
            tokens: [
                'FRACT_1_4',
                'FRACT_3_4',
                'FRACT_1_5',
            ],
        },
    ],
    ANGLE: [
        {
            label: 'Angles',
            tokens: [
                'ANGLE_270',
                'ANGLE_180',
                'ANGLE_90',
                'ANGLE_60',
            ],
        },
        {
            label: 'Angles',
            tokens: [
                'ANGLE_45',
                'ANGLE_30',
                'ANGLE_15',
                'ANGLE_10',
            ],
        },
    ],
    OP: [
        {
            label: 'OP',
            tokens: ['OP_MULT', 'OP_ADD', 'OP_SUB'],
        },
    ],
    STROKE: [
        {
            label: 'Thick',
            tokens: [
                'STROKE_THICK_ADD',
                'STROKE_THICK_SUB',
            ],
        }
    ],
};

export const NAME_TO_FAMILY = new Map<string, string>(
    Object.entries(TOKEN_FAMILIES)
        .map(([name, categories]) => categories.map(category => category.tokens.map(token => [token, name])))
        .flat()
        .flat() as [string, string][]
);
