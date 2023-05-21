import { createSvg } from "@/core/svg";
import { Cursor } from "@/core/cursor";
import { Figure, Line, Rectangle, Triangle, Circle, Arc } from "@/core/figures";
import { STAVES, SUFFIXES } from "@/core/mappings";
import { DOMImplementation, XMLSerializer } from "xmldom";
import { writeFile, mkdir } from "fs";

type Tokens = [string, Figure[], number?, number?];

const SUFFIX_TO_ICON = {
    "END": [
        new Arc([80, 80], 10, -0.5, { shift: 0.75 }, { fill: "none", color: "black", stroke: 3 }),
        new Line([70, 80], [80, 80], { stroke: 3 }),
    ],
    "EVEN": [
        new Line([70, 70], [70, 90], { stroke: 3 }),
        new Line([75, 70], [75, 90], { stroke: 3 }),
    ],
    "ODD": [
        new Line([70, 70], [70, 90], { stroke: 3 }),
        new Line([75, 70], [75, 90], { stroke: 3 }),
        new Line([80, 65], [65, 95], { stroke: 3 }),
    ],
    "GE3": [
        new Line([60, 70], [70, 75], { stroke: 2 }),
        new Line([60, 80], [70, 75], { stroke: 2 }),
        new Line([60, 85], [70, 80], { stroke: 2 }),
        new Line([75, 70], [75, 90], { stroke: 3 }),
        new Line([80, 70], [80, 90], { stroke: 3 }),
        new Line([85, 70], [85, 90], { stroke: 3 }),
    ],
    "GE5": [
        new Line([60, 70], [70, 75], { stroke: 2 }),
        new Line([60, 80], [70, 75], { stroke: 2 }),
        new Line([60, 85], [70, 80], { stroke: 2 }),
        new Line([75, 70], [80, 90], { stroke: 3 }),
        new Line([80, 90], [85, 70], { stroke: 3 }),
    ],
    "GE7": [
        new Line([60, 70], [70, 75], { stroke: 2 }),
        new Line([60, 80], [70, 75], { stroke: 2 }),
        new Line([60, 85], [70, 80], { stroke: 2 }),
        new Line([75, 70], [80, 90], { stroke: 3 }),
        new Line([80, 90], [85, 70], { stroke: 3 }),
        new Line([87, 70], [87, 90], { stroke: 3 }),
        new Line([92, 70], [92, 90], { stroke: 3 }),
    ],
};

const STAVES_TO_ICON = {
    "F": [
        new Line([30, 80], [30, 20], { stroke: 5 }),
        new Line([30, 20], [60, 20], { stroke: 5 }),
        new Line([30, 40], [60, 40], { stroke: 5 }),
    ],
    "G": [
        new Line([30, 80], [30, 20], { stroke: 5 }),
        new Line([30, 20], [60, 20], { stroke: 5 }),
        new Line([30, 80], [60, 80], { stroke: 5 }),
        new Line([60, 80], [60, 50], { stroke: 5 }),
        new Line([40, 50], [60, 50], { stroke: 5 }),
    ],
    "H": [
        new Line([30, 80], [30, 20], { stroke: 5 }),
        new Line([60, 80], [60, 20], { stroke: 5 }),
        new Line([30, 50], [60, 50], { stroke: 5 }),
    ],
}

const BLACK = "#000000";
const RED = "#DC143C";
const SQRT_2_2 = Math.sqrt(2) / 2;
const CIRCLE = new Circle([50, 50], 45, {fill: "none", color: RED, stroke: 5});

function main() {
    const tokens: Tokens[] = [
        ["COUNT_1", generateCount(1)],
        ["COUNT_2", generateCount(2)],
        ["COUNT_3", generateCount(3)],
        ["COUNT_5", generateFiveCount()],
        ["COUNT_7", generateSevenCount()],

        ["COUNT_MINUS", [new Line([20, 50], [80, 50], { stroke: 5 })]],
        ["COUNT_GOLD", [
            new Arc([50, 30], 30, 0.6, { shift: 0.0 }, {fill: "none", color: "black", stroke: 5 }),
            new Arc([65, 30], 15, 0.5, { shift: 0.5 }, {fill: "none", color: "black", stroke: 5 }),
            new Line([50, 30], [50, 90], {stroke: 5}),
        ]],
        ["COUNT_SILVER", [
            new Arc([50, 30], 30, 0.5, { shift: 0.0 }, {fill: "none", color: "black", stroke: 5 }),
            new Arc([65, 30], 15, 0.5, { shift: 0.5 }, {fill: "none", color: "black", stroke: 5 }),
            new Arc([35, 30], 15, 0.5, { shift: 0.5 }, {fill: "none", color: "black", stroke: 5 }),
            new Line([50, 30], [50, 90], {stroke: 5}),
        ]],
        ["COUNT_BRONZE", [
            new Arc([50, 30], 30, 0.5, { shift: 0.0 }, {fill: "none", color: "black", stroke: 5 }),
            new Arc([65, 30], 15, 0.5, { shift: 0.5 }, {fill: "none", color: "black", stroke: 5 }),
            new Arc([35, 30], 15, 0.5, { shift: 0.5 }, {fill: "none", color: "black", stroke: 5 }),
            new Line([50, 30], [30, 90], {stroke: 5}),
            new Line([50, 30], [70, 90], {stroke: 5}),
        ]],
        ["COUNT_PLASTIC", [
            new Circle([50, 50], 25, {fill: "none", color: BLACK, stroke: 5 }),
            new Line([50, 10], [50, 90], {stroke: 5}),
            new Line([30, 10], [70, 10], {stroke: 5}),
            new Line([30, 90], [70, 90], {stroke: 5}),
        ]],
        ["FRACT_1_2", generateFract(1, 2)],
        ["FRACT_1_3", generateFract(1, 3)],
        ["FRACT_2_3", generateFract(2, 3)],
        ["FRACT_1_4", generateFract(1, 4)],
        ["FRACT_3_4", generateFract(3, 4)],
        ["FRACT_1_5", generateFract(1, 5)],
        ["FRACT_2_5", generateFract(2, 5)],
        ["FRACT_3_5", generateFract(3, 5)],
        ["FRACT_4_5", generateFract(4, 5)],
        ["ANGLE_270", generateAngle(270)],
        ["ANGLE_180", generateAngle(180)],
        ["ANGLE_90", generateAngle(90)],
        ["ANGLE_60", generateQuarterAngle(60)],
        ["ANGLE_45", generateQuarterAngle(45)],
        ["ANGLE_30", generateQuarterAngle(30)],
        ["ANGLE_15", generateQuarterAngle(15)],
        ["ANGLE_10", generateQuarterAngle(10)],
        ["ARGUMENT", [
            new Line([20, 80], [80, 80], { stroke: 3 }),
            new Line([80, 80], [50, 20], { stroke: 3 }),
            new Line([50, 20], [20, 80], { stroke: 3 }),
        ]],
        ["CALL_F", STAVES_TO_ICON.F],
        ["CALL_G", STAVES_TO_ICON.G],
        ["CALL_H", STAVES_TO_ICON.H],
        ["CLOSE_CALL_F", [...STAVES_TO_ICON.F, CIRCLE]],
        ["CLOSE_CALL_G", [...STAVES_TO_ICON.G, CIRCLE]],
        ["CLOSE_CALL_H", [...STAVES_TO_ICON.H, CIRCLE]],
        ["CALL_DIAMOND", [
            new Line([50, 20], [70, 50], { stroke: 3 }),
            new Line([50, 20], [30, 50], { stroke: 3 }),
            new Line([50, 80], [70, 50], { stroke: 3 }),
            new Line([50, 80], [30, 50], { stroke: 3 }),
        ]],
        ["CALL_INV_TRIANGLE", [
            new Line([20, 20], [80, 20], { stroke: 3 }),
            new Line([80, 20], [50, 80], { stroke: 3 }),
            new Line([50, 80], [20, 20], { stroke: 3 }),
        ]],
        ["SUFFIX_END", SUFFIX_TO_ICON["END"], 60, 100],
        ["SUFFIX_EVEN", SUFFIX_TO_ICON["EVEN"], 60, 100],
        ["SUFFIX_ODD", SUFFIX_TO_ICON["ODD"], 60, 100],
        ["SUFFIX_GE3", SUFFIX_TO_ICON["GE3"], 60, 100],
        ["SUFFIX_GE5", SUFFIX_TO_ICON["GE5"], 60, 100],
        ["SUFFIX_GE7", SUFFIX_TO_ICON["GE7"], 60, 100],
        ["DRAW_LINE", withPencil([
            new Line([20, 70], [80, 70], { stroke: 5 }),
        ])],
        ["DRAW_ARCLINE_R_3_4", withPencilArcLine(+3 / 4)],
        ["DRAW_ARCLINE_R_2_3", withPencilArcLine(+2 / 3)],
        ["DRAW_ARCLINE_R_1_2", withPencilArcLine(+1 / 2)],
        ["DRAW_ARCLINE_R_1_3", withPencilArcLine(+1 / 3)],
        ["DRAW_ARCLINE_R_1_4", withPencilArcLine(+1 / 4)],
        ["DRAW_ARCLINE_R_1_5", withPencilArcLine(+1 / 5)],
        ["DRAW_ARCLINE_L_3_4", withPencilArcLine(-3 / 4)],
        ["DRAW_ARCLINE_L_2_3", withPencilArcLine(-2 / 3)],
        ["DRAW_ARCLINE_L_1_2", withPencilArcLine(-1 / 2)],
        ["DRAW_ARCLINE_L_1_3", withPencilArcLine(-1 / 3)],
        ["DRAW_ARCLINE_L_1_4", withPencilArcLine(-1 / 4)],
        ["DRAW_ARCLINE_L_1_5", withPencilArcLine(-1 / 5)],
        ["DRAW_CIRCLE", withPencil([
            new Circle([50, 70], 20),
        ])],
        ["DRAW_SQUARE", withPencil([
            new Rectangle([50, 70], [0, 1], 20, 20),
        ])],
        ["DRAW_DIAMOND", withPencil([
            new Rectangle([50, 70], [SQRT_2_2, SQRT_2_2], 10, 20),
        ])],
        ["DRAW_TRIANGLE", withPencil([
            new Triangle([50, 70], [0, -1], 20),
        ])],
        ["OP_MULT", withStar(5, [
            new Line([50 - 20, 60 - 20], [50 + 20, 60 + 20], { stroke: 4 }),
            new Line([50 - 20, 60 + 20], [50 + 20, 60 - 20], { stroke: 4 }),
        ])],
        ["OP_ADD", withStar(5, [
            new Line([50, 60 - 20], [50, 60 + 20], { stroke: 4 }),
            new Line([50 - 20, 60], [50 + 20, 60], { stroke: 4 }),
        ])],
        ["OP_SUB", withStar(5, [
            new Line([50 - 20, 60], [50 + 20, 60], { stroke: 4 }),
        ])],
        ["COLOR_MAX", withStar(7, [
            new Circle([50, 60], 20, { fill: RED }),
        ])],
        ["COLOR_MIN", withStar(7, [
            new Circle([50, 60], 20, { fill: BLACK }),
        ])],
        ["COLOR_FILL", withStar(7, [
            new Circle([25, 60], 15, { fill: "none", color: BLACK, stroke: 3 }),
            new Circle([75, 60], 15, { fill: BLACK }),
            new Line([45, 60], [55, 60], { stroke: 2, color: BLACK }),
            new Triangle([55, 60], [+1, 0], 5, { fill: BLACK }),
        ])],
        ["COLOR_EMPTY", withStar(7, [
            new Circle([25, 60], 15, { fill: BLACK }),
            new Circle([75, 60], 15, { fill: "none", color: BLACK, stroke: 3 }),
            new Line([45, 60], [55, 60], { stroke: 2, color: BLACK }),
            new Triangle([55, 60], [+1, 0], 5, { fill: BLACK }),
        ])],
        ["COLOR_SHIFT_1_2", withStar(7, [
            new Circle([25, 60], 15, { fill: BLACK }),
            new Circle([75, 60], 15, { fill: RED }),
            new Line([40, 55], [55, 55], { stroke: 2, color: BLACK }),
            new Triangle([55, 55], [+1, 0], 5, { fill: BLACK }),
            new Line([45, 65], [60, 65], { stroke: 2, color: RED }),
            new Triangle([45, 65], [-1, 0], 5, { fill: RED }),
        ])],
        ["COLOR_SHIFT_1_4", withStar(7, [
            new Circle([25, 40], 12, { fill: BLACK }),
            new Circle([75, 40], 12, { fill: RED }),
            new Circle([75, 80], 12, { fill: BLACK }),
            new Circle([25, 80], 12, { fill: RED }),
            new Line([40, 55], [55, 55], { stroke: 2, color: BLACK }),
            new Triangle([55, 55], [+1, 0], 5, { fill: BLACK }),
            new Line([45, 65], [60, 65], { stroke: 2, color: RED }),
            new Triangle([45, 65], [-1, 0], 5, { fill: RED }),
        ])],
        ["COLOR_SHIFT_1_5", withStar(7, [
            new Circle([25, 40], 10, { fill: BLACK }),
            new Circle([75, 40], 10, { fill: RED }),
            new Circle([75, 80], 10, { fill: BLACK }),
            new Circle([25, 80], 10, { fill: RED }),
            new Circle([25, 60], 10, { fill: BLACK }),
            new Line([40, 55], [55, 55], { stroke: 2, color: BLACK }),
            new Triangle([55, 55], [+1, 0], 5, { fill: BLACK }),
            new Line([45, 65], [60, 65], { stroke: 2, color: RED }),
            new Triangle([45, 65], [-1, 0], 5, { fill: RED }),
        ])],
        ["COLOR_SHIFT_1_10", withStar(7, [
            new Circle([30, 40], 10, { fill: RED }),
            new Circle([30, 60], 10, { fill: RED }),
            new Circle([30, 80], 10, { fill: RED }),
            new Circle([13, 50], 8, { fill: RED }),
            new Circle([13, 70], 8, { fill: RED }),
            new Circle([70, 40], 10, { fill: BLACK }),
            new Circle([70, 60], 10, { fill: BLACK }),
            new Circle([70, 80], 10, { fill: BLACK }),
            new Circle([87, 50], 8, { fill: BLACK }),
            new Circle([87, 70], 8, { fill: BLACK }),
            new Line([40, 55], [55, 55], { stroke: 2, color: BLACK }),
            new Triangle([55, 55], [+1, 0], 5, { fill: BLACK }),
            new Line([45, 65], [60, 65], { stroke: 2, color: RED }),
            new Triangle([45, 65], [-1, 0], 5, { fill: RED }),
        ])],
        ["STROKE_THICK_ADD", withStar(7, [
            new Line([30, 40], [30, 90], { stroke: 4}),
            new Line([70, 40], [70, 90], { stroke: 8}),
            new Line([35, 80], [60, 80], { stroke: 2}),
            new Line([35, 65], [60, 65], { stroke: 2}),
            new Line([35, 50], [60, 50], { stroke: 2}),
            new Triangle([60, 80], [+1, 0], 5),
            new Triangle([60, 65], [+1, 0], 5),
            new Triangle([60, 50], [+1, 0], 5),
        ])],
        ["STROKE_THICK_SUB", withStar(7, [
            new Line([30, 40], [30, 90], { stroke: 8}),
            new Line([70, 40], [70, 90], { stroke: 4}),
            new Line([35, 80], [60, 80], { stroke: 2}),
            new Line([35, 65], [60, 65], { stroke: 2}),
            new Line([35, 50], [60, 50], { stroke: 2}),
            new Triangle([60, 80], [+1, 0], 5),
            new Triangle([60, 65], [+1, 0], 5),
            new Triangle([60, 50], [+1, 0], 5),
        ])],
        ["MOVE_FORWARD", [
            new Line([50, 80], [50, 20], { stroke: 10 }),
            new Line([30, 40], [50, 20], { stroke: 5 }),
            new Line([70, 40], [50, 20], { stroke: 5 }),
        ]],
        ["MOVE_BACKWARD", [
            new Line([50, 80], [50, 20], { stroke: 10 }),
            new Line([30, 60], [50, 80], { stroke: 5 }),
            new Line([70, 60], [50, 80], { stroke: 5 }),
        ]],
        ["MOVE_LEFT", [
            new Line([80, 50], [20, 50], { stroke: 10 }),
            new Line([40, 30], [20, 50], { stroke: 5 }),
            new Line([40, 70], [20, 50], { stroke: 5 }),
        ]],
        ["MOVE_RIGHT", [
            new Line([80, 50], [20, 50], { stroke: 10 }),
            new Line([60, 30], [80, 50], { stroke: 5 }),
            new Line([60, 70], [80, 50], { stroke: 5 }),
        ]],
        ["ROTATE_LEFT", [
            new Arc([50, 50], 30, 0.5, { shift: 0.75 }, { fill: "none", color: "black", stroke: 5 }),
            new Line([50, 80], [60, 65], { stroke: 5 }),
            new Line([50, 80], [60, 93], { stroke: 5 }),
        ]],
        ["ROTATE_RIGHT", [
            new Arc([50, 50], 30, -0.5, { shift: 0.75 }, { fill: "none", color: "black", stroke: 5 }),
            new Line([50, 80], [40, 65], { stroke: 5 }),
            new Line([50, 80], [40, 93], { stroke: 5 }),
        ]],
        ["FLIP_V", [
            new Line([80, 50], [20, 50], { stroke: 10 }),
            new Triangle([80, 50], [+1, 0], 20),
            new Triangle([20, 50], [-1, 0], 20),
        ]],
        ["FLIP_H", [
            new Line([50, 80], [50, 20], { stroke: 10 }),
            new Triangle([50, 80], [0, +1], 20),
            new Triangle([50, 20], [0, -1], 20),
        ]],
        ["REVERSE", [
            new Line([20, 50], [50, 80], { stroke: 3 }),
            new Line([20, 50], [50, 20], { stroke: 3 }),
            new Line([50, 80], [50, 20], { stroke: 3 }),
            new Line([50, 50], [80, 80], { stroke: 3 }),
            new Line([50, 50], [80, 20], { stroke: 3 }),
            new Line([80, 80], [80, 20], { stroke: 3 }),
        ]],
        ["REPLAY", generateReplay() ],
        ["REPLAY_2", generateReplay(2, 10) ],
        ["REPLAY_3", generateReplay(3, 8) ],
        ["REPLAY_4", generateReplay(4, 6) ],
    ];

    STAVES.forEach(name => {
        const [iconName, figures] = tokens.find(([n, f]) => n === `CALL_${name}`);
        SUFFIXES.forEach(suffix => {
            const realName = `${iconName}_${suffix}`;
            const icon = SUFFIX_TO_ICON[suffix];
            tokens.push([realName, figures.concat(icon)]);
        });
    });

    const document =
        new DOMImplementation()
        .createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const xml = new XMLSerializer();

    mkdir("public/icons", () => {
        tokens.forEach(([name, figures, min = 0, max = 100]) => {
            const cursor = new Cursor();
            cursor.figures = figures;
            cursor.box.min = [min, min];
            cursor.box.max = [max, max];

            const svg = createSvg(document, cursor);
            writeFile(`public/icons/${name}.svg`, xml.serializeToString(svg), () => {});
        });
    });

}

function generateCount(count: number, shift: number = 0, width: number = 1): Figure[] {
    const figures: Figure[] = [];
    for(let i = 1; i <= count; i++) {
        const x = 25 * width + i / (count + 1) * 50 * width + shift;
        figures.push(new Line([x, 20], [x, 80], { stroke: 3 }));
    }
    const x_start = 20 * width + shift;
    const x_end = x_start + 60 * width;
    figures.push(new Line([x_start, 20], [x_end, 20], { stroke: 3 }));
    figures.push(new Line([x_start, 80], [x_end, 80], { stroke: 3 }));
    return figures;
}

function generateFiveCount(width: number = 1): Figure[] {
    const s = 25;
    const ls = s - 10;
    const le = s + 10;
    const w1 = 25 * width;
    const w2 = w1 * 2;
    return [
        new Line([s, 20], [s + w1, 80], { stroke: 3 }),
        new Line([s + w1, 80], [s + w2, 20], { stroke: 3 }),
        new Line([ls, 20], [le, 20], { stroke: 3 }),
        new Line([ls + w2, 20], [le + w2, 20], { stroke: 3 }),
    ];
}

function generateSevenCount(): Figure[] {
    return generateFiveCount(0.75).concat(generateCount(2, 50, 0.5));
}

function generateFract(filled: number, total: number): Figure[] {
    const figures: Figure[] = [];
    const size = 60 / total;
    const diff = total - filled;
    const f = (i, opts) => {
        const y = (size + 3) * i;
        figures.push(new Rectangle([50, y], [0, 1], size, size, opts));
    }
    for(let i = 1; i <= diff; i++) {
        f(i, {fill: "none", color: "black", stroke: 1});
    }
    for(let i = diff + 1; i <= total; i++) {
        f(i, {});
    }
    return figures;
}

function generateAngle(angle): Figure[] {
    const figures: Figure[] = [];
    figures.push(new Circle([50, 50], 40, {fill: "none", color: "black", stroke: 3}));
    figures.push(new Arc([50, 50], 40, angle / 360, { close: true }));
    return figures;
}

function generateQuarterAngle(angle): Figure[] {
    const figures: Figure[] = [];
    figures.push(new Arc([10, 10], 80, 0.25, { close: true }, {fill: "none", color: "black", stroke: 3}));
    figures.push(new Arc([10, 10], 80, angle / 360, { close: true }));
    return figures;
}

function generateReplay(count: number = 1, distance: number = 6): Figure[] {
    const figures: Figure[] = [
        new Arc([50, 50], 30, 0.85, { shift: 0.75 }, {fill: "none", color: "black", stroke: 5 }),
        new Circle([50, 20], 10),
        new Line([26, 32], [10, 35], { stroke: 5 }),
        new Line([26, 32], [35, 45], { stroke: 5 }),
    ]

    if (count > 1) {
        for(let i = 0; i < count; i++) {
            const x = 50 + i * distance - (count - 1) * distance / 2;
            figures.push(new Line([x, 40], [x, 60], { stroke: 3 }));
        }
    }

    return figures;
}

function withPencil(oldFigures: Figure[]): Figure[] {
    const figures: Figure[] = [
        new Line([20, 20], [20, 40], { stroke: 3 }),
        new Line([20, 20], [60, 20], { stroke: 3 }),
        new Line([20, 40], [60, 40], { stroke: 3 }),
        new Line([60, 20], [80, 30], { stroke: 3 }),
        new Line([60, 40], [80, 30], { stroke: 3 }),
    ];
    return figures.concat(oldFigures);
}

function withStar(points: number, oldFigures: Figure[]): Figure[] {
    const x = 50;
    const y = 20;

    function f(i) {
        let ratio = Math.PI * i / points;
        let r = i % 2 ? 20 : 5;
        let xx = x + Math.sin(ratio) * r;
        let yy = y + Math.cos(ratio) * r;
        return [xx, yy];
    }

    const figures: Figure[] = [];
    for(let i = 0; i < points * 2; i++) {
        figures.unshift(new Line(f(i), f(i + 1), { stroke: 2 }));
    }
    return figures.concat(oldFigures);
}

function withPencilArcLine(ratio): Figure[] {
    return withPencil([new Arc([50, 70], 20, ratio, { shift: 0.25 }, {fill: "none", color: "black", stroke: 5 })]);
}

main();
