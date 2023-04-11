import { Project, ProjectStyle, Stave } from "./models";

function createProject(title: string, iterations: number, staves: Stave[], style: ProjectStyle): Project {
    return {
        id: title,
        title,
        iterations: Math.round(iterations),
        staves,
        style,
        created: new Date(),
        updated: new Date(),
    }
}

export function initDatabase(update: (project: Project) => void) {
    update(createProject(
        "Binary Tree", 9,
        [
            {
                name: "F", tokens: [
                    'DRAW_CIRCLE', 'COUNT_3', 'ROTATE_RIGHT', 'ANGLE_30', 'DRAW_LINE', 'CALL_F', 'REVERSE',
                    'COUNT_3', 'ROTATE_LEFT', 'ANGLE_30', 'DRAW_LINE', 'CALL_F', 'REVERSE', 'COUNT_3']
            },
            { name: "F", suffix: "END", tokens: ['DRAW_CIRCLE', 'COUNT_3', 'COLOR_MAX'] },
        ],
        { firstColor: '#000000', secondColor: '#ff0000', backgroundColor: '#ffffff', strokeSize: 1 },
    ));

    update(createProject(
        "Constellation of Muffin", 7,
        [
            {
                name: "F", tokens: [
                    'DRAW_LINE', 'ARGUMENT', 'DRAW_ARCLINE_L_1_5', 'ARGUMENT', 'CALL_F', 'ARGUMENT', 'DRAW_TRIANGLE',
                    'COLOR_MAX', 'COUNT_2', 'COUNT_3', 'CALL_F', 'COUNT_GOLD', 'FRACT_1_3', 'ARGUMENT']
            },
        ],
        { firstColor: '#ff9500', secondColor: '#ffd561', backgroundColor: '#8a8a8a', strokeSize: 1 },
    ));

    update(createProject(
        "Curvy pentagon", 5,
        [
            { name: "F", tokens: ['DRAW_LINE', 'ARGUMENT', 'DRAW_ARCLINE_L_1_5', 'ARGUMENT', 'CALL_F', 'ARGUMENT'] },
        ],
        { firstColor: '#000000', secondColor: '#ff0000', backgroundColor: '#ffffff', strokeSize: 1 },
    ));

    update(createProject(
        "Dotted Sun", 10,
        [
            {
                name: "F", tokens: [
                    'DRAW_CIRCLE', 'COLOR_MAX', 'COUNT_5', 'DRAW_LINE', 'ARGUMENT',
                    'DRAW_ARCLINE_L_1_5', 'ARGUMENT', 'CALL_F', 'COUNT_MINUS', 'ARGUMENT']
            },
        ],
        { firstColor: '#ff9500', secondColor: '#ffbb00', backgroundColor: '#8a8a8a', strokeSize: 1 },
    ));

    update(createProject(
        "Honeycomb", 8,
        [
            { name: "F", tokens: ['DRAW_ARCLINE_L_1_3', 'CALL_F', 'COLOR_SHIFT_1_4', 'DRAW_ARCLINE_R_1_3', 'CALL_F'] },
        ],
        { firstColor: '#ffdd00', secondColor: '#ff7575', backgroundColor: '#000000', strokeSize: 1 },
    ));

    update(createProject(
        "Koch Snowflake", 5,
        [
            { name: "F", tokens: ['CALL_G', 'ROTATE_RIGHT', 'COUNT_2', 'ANGLE_60', 'REPLAY_2', 'COUNT_3'] },
            {
                name: "G", tokens: [
                    'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_RIGHT', 'COUNT_2',
                    'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND']
            },
            { name: "G", suffix: "END", tokens: ['DRAW_LINE', 'ARGUMENT'] },
            { name: "DIAMOND", tokens: ['FRACT_1_3', 'ARGUMENT'] },
        ],
        { firstColor: '#ffffff', secondColor: '#ff0000', backgroundColor: '#00bfff', strokeSize: 1 },
    ));

    update(createProject(
        "Koch Snowflake - 2", 4,
        [
            { name: "F", tokens: ['CALL_G', 'ROTATE_RIGHT', 'COUNT_2', 'ANGLE_60', 'REPLAY_2', 'COUNT_3'] },
            {
                name: "G", tokens: [
                    'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_RIGHT', 'COUNT_2',
                    'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND']
            },
            {
                name: "G", suffix: "END", tokens: [
                    'DRAW_LINE', 'ARGUMENT', 'DRAW_ARCLINE_L_2_3', 'CALL_DIAMOND', 'DRAW_ARCLINE_R_2_3', 'CALL_DIAMOND']
            },
            {  name: "DIAMOND", tokens: ['FRACT_1_3', 'ARGUMENT'] },
        ],
        { firstColor: '#ffffff', secondColor: '#ff0000', backgroundColor: '#00bfff', strokeSize: 1 },
    ));

    update(createProject(
        "The grid", 8,
        [
            {
                name: "F", tokens: [
                    'DRAW_CIRCLE', 'COUNT_3', 'COUNT_3', 'ROTATE_RIGHT', 'ANGLE_90', 'CALL_G', 'CALL_F', 'REVERSE', 'COUNT_3',
                    'ROTATE_LEFT', 'ANGLE_90', 'CALL_G', 'CALL_F', 'REVERSE', 'COUNT_3']
            },
            { name: "F", suffix: "END", tokens: ['DRAW_CIRCLE', 'COUNT_3', 'COUNT_3', 'COLOR_MAX'] },
            { name: "G", tokens: ['DRAW_ARCLINE_L_1_4', 'DRAW_ARCLINE_R_1_2', 'FRACT_1_3', 'DRAW_ARCLINE_L_1_4', 'FRACT_1_3'] },
        ],
        { firstColor: '#000000', secondColor: '#ff0000', backgroundColor: '#ffffff', strokeSize: 1 },
    ));

}