import { TokensMap, SuffixesMap, StavesMap } from "@/core/mappings";
import { Stave } from "@/core/stave";

export function encodeStaves(staves: Stave[]): [string, string][] {
    return staves.map(stave => [encodeStaveName(stave), encodeTokens(stave.tokens)]);
}

export function encodeStaveName(stave: Stave): string {
    const name = STAVE_TO_SHORTCUT[stave.name] || "";
    const suffix = SUFFIX_TO_SHORTCUT[stave.suffix] || "";
    return `.${name}${suffix}`;
}

export function encodeTokens(tokens: string[]): string {
    return tokens
        .map(token => TOKEN_TO_SHORTCUT[token] || "")
        .join("");
}

export function decodeStaves(code: IterableIterator<[string, string]>): Stave[] {
    const staves: Stave[] = [];

    for(const [codedName, codedTokens] of code) {
        const realName = decodeStaveName(codedName);
        if (realName === null) {
            continue;
        }
        const [name, suffix] = realName;
        let stave: Stave = {name, tokens: decodeTokens(codedTokens)};
        if (suffix !== null) {
            stave.suffix  = suffix;
        }
        staves.push(stave);
    }

    return staves;
}

export function decodeStaveName(code: string): [string, string | null] | null {
    if (code.length > 3 && code.length < 2) {
        return null;
    }

    if (code[0] !== ".") {
        return null;
    }

    const name = STAVE_FROM_SHORTCUT[code[1]];
    if (name === undefined) {
        return null;
    }

    if (code.length == 2) {
        return [name, null];
    }

    const suffix = SUFFIX_FROM_SHORTCUT[code[2]];
    if (suffix === undefined) {
        return null;
    }

    return [name, suffix];
}

export function decodeTokens(code: string): string[] {
    const tokens = [];
    for (let i = 0; i < code.length; i += 2) {
        const tokenCode = code.substring(i, i + 2);
        const token = TOKEN_FROM_SHORTCUT[tokenCode];
        if (token !== undefined) {
            tokens.push(token);
        }
    }
    return tokens;
}

const STAVE_TO_SHORTCUT: StavesMap<string> = {
    F: "F",
    G: "G",
    H: "H",
    DIAMOND: "D",
    INV_TRIANGLE: "I",
} as const;

const SUFFIX_TO_SHORTCUT: SuffixesMap<string> = {
    END: "0",
    EVEN: "1",
    ODD: "2",
    GE3: "3",
    GE5: "4",
    GE7: "5",
} as const;

const TOKEN_TO_SHORTCUT: TokensMap<string> = {
    // *** Values ***
    // Counts
    COUNT_1: "C0",
    COUNT_2: "C1",
    COUNT_3: "C2",
    COUNT_5: "C3",
    COUNT_7: "C4",
    // Counts (special)
    COUNT_MINUS: "C5",
    COUNT_GOLD: "C6",
    COUNT_SILVER: "C7",
    COUNT_BRONZE: "C8",
    COUNT_PLASTIC: "C9",
    // Fractions
    FRACT_1_2: "F0",
    FRACT_1_3: "F1",
    FRACT_2_3: "F2",
    FRACT_1_4: "F3",
    FRACT_3_4: "F4",
    FRACT_1_5: "F5",
    FRACT_2_5: "F6",
    FRACT_3_5: "F7",
    FRACT_4_5: "F8",
    // Angles
    ANGLE_270: "A0",
    ANGLE_180: "A1",
    ANGLE_90: "A2",
    ANGLE_60: "A3",
    ANGLE_45: "A4",
    ANGLE_30: "A5",
    ANGLE_15: "A6",
    ANGLE_10: "A7",
    // Colors
    COLOR_MAX: "V0",
    COLOR_MIN: "V1",
    COLOR_SHIFT_1_2: "V2",
    COLOR_SHIFT_1_4: "V3",
    COLOR_SHIFT_1_5: "V4",
    COLOR_SHIFT_1_10: "V5",
    COLOR_FILL: "V6",
    COLOR_EMPTY: "V7",
    // Stroke
    STROKE_SOLID: "S0",
    STROKE_DASHED: "S1",
    STROKE_DOTTED: "S2",
    STROKE_THICK_ADD: "S3",
    STROKE_THICK_SUB: "S4",
    // Operations
    OP_MULT: "O0",
    OP_ADD: "O1",
    OP_SUB: "O2",
    // Arguments
    ARGUMENT: "Z0",
    CALL_DIAMOND: "Z1",
    CALL_INV_TRIANGLE: "Z2",

    // *** Actions ***
    // Callers
    CALL_F: "X0",
    CALL_G: "X1",
    CALL_H: "X2",
    // Close Callers
    CLOSE_CALL_F: "Y0",
    CLOSE_CALL_G: "Y1",
    CLOSE_CALL_H: "Y2",
    // Shapes
    DRAW_CIRCLE: "D0",
    DRAW_SQUARE: "D1",
    DRAW_TRIANGLE: "D2",
    // Line
    DRAW_LINE: "L0",
    // Arc
    DRAW_ARCLINE_R_3_4: "L1",
    DRAW_ARCLINE_R_2_3: "L2",
    DRAW_ARCLINE_R_1_2: "L3",
    DRAW_ARCLINE_R_1_3: "L4",
    DRAW_ARCLINE_R_1_4: "L5",
    DRAW_ARCLINE_R_1_5: "L6",
    DRAW_ARCLINE_L_3_4: "L7",
    DRAW_ARCLINE_L_2_3: "L8",
    DRAW_ARCLINE_L_1_2: "L9",
    DRAW_ARCLINE_L_1_3: "LA",
    DRAW_ARCLINE_L_1_4: "LB",
    DRAW_ARCLINE_L_1_5: "LC",
    // Cursor translations
    MOVE_FORWARD: "M0",
    MOVE_BACKWARD: "M1",
    MOVE_LEFT: "M2",
    MOVE_RIGHT: "M3",
    // Cursor rotations
    ROTATE_LEFT: "R0",
    ROTATE_RIGHT: "R1",
    // Cursor flip
    FLIP_V: "R2",
    FLIP_H: "R3",

    // Repetetive actions
    REVERSE: "Q0",
    REPLAY: "Q1",
    REPLAY_2: "Q2",
    REPLAY_3: "Q3",
    REPLAY_4: "Q4",
} as const;

function inverse<Type extends string>(obj: Record<Type, string>): Record<string, Type> {
    const inv_entries = Object.entries(obj).map(([key, val]) => [val, key]);
    return Object.fromEntries(inv_entries);
}

const STAVE_FROM_SHORTCUT = inverse(STAVE_TO_SHORTCUT);
const TOKEN_FROM_SHORTCUT = inverse(TOKEN_TO_SHORTCUT);
const SUFFIX_FROM_SHORTCUT = inverse(SUFFIX_TO_SHORTCUT);