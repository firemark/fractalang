import { createSvg } from "../svg";
import { Cursor } from "../cursor";
import { Figure, Line, Square, Triangle, Circle, Arc } from "../figures";
import { PROCEDURES, DYNAMIC_ARGS, SUFFIXES } from "../parser";
import { DOMImplementation, XMLSerializer } from "xmldom";
import { writeFile, mkdir } from "fs";

type Tokens = [string, Figure[], number?, number?];

const SUFFIX_TO_ICON = {
    "END": [
        new Arc([80, 80], 10, -0.5, { shift: 0.75, fill: "none", stroke: 3 }),
        new Line([70, 80], [80, 80], 3),
    ],
    "EVEN": [
        new Line([70, 70], [70, 90], 3),
        new Line([75, 70], [75, 90], 3),
    ],
    "ODD": [
        new Line([70, 70], [70, 90], 3),
        new Line([75, 70], [75, 90], 3),
        new Line([80, 65], [65, 95], 3),
    ],
};

function main() {
    const tokens: Tokens[] = [
        ["COUNT_1", generateCount(1)],
        ["COUNT_2", generateCount(2)],
        ["COUNT_3", generateCount(3)],
        ["COUNT_5", generateFiveCount()],
        ["FRACT_1_2", generateFract(1, 2)],
        ["FRACT_1_3", generateFract(1, 3)],
        ["FRACT_2_3", generateFract(2, 3)],
        ["FRACT_1_4", generateFract(1, 4)],
        ["FRACT_3_4", generateFract(3, 4)],
        ["FRACT_1_5", generateFract(1, 5)],
        //["ANGLE_360", [new Circle([50, 50], 40)]],
        ["ANGLE_270", generateAngle(270)],
        ["ANGLE_180", generateAngle(180)],
        ["ANGLE_90", generateAngle(90)],
        ["ANGLE_60", generateQuarterAngle(60)],
        ["ANGLE_45", generateQuarterAngle(45)],
        ["ANGLE_30", generateQuarterAngle(30)],
        ["ANGLE_15", generateQuarterAngle(15)],
        ["ARGUMENT", [
            new Line([20, 80], [80, 80], 3),
            new Line([80, 80], [50, 20], 3),
            new Line([50, 20], [20, 80], 3),
        ]],
        ["CALL_F", [
            new Line([30, 80], [30, 20], 5),
            new Line([30, 20], [60, 20], 5),
            new Line([30, 40], [60, 40], 5),
        ]],
        ["CALL_G", [
            new Line([30, 80], [30, 20], 5),
            new Line([30, 20], [60, 20], 5),
            new Line([30, 80], [60, 80], 5),
            new Line([60, 80], [60, 50], 5),
            new Line([40, 50], [60, 50], 5),
        ]],
        ["CALL_H", [
            new Line([30, 80], [30, 20], 5),
            new Line([60, 80], [60, 20], 5),
            new Line([30, 50], [60, 50], 5),
        ]],
        ["CALL_DIAMOND", [
            new Line([50, 20], [70, 50], 3),
            new Line([50, 20], [30, 50], 3),
            new Line([50, 80], [70, 50], 3),
            new Line([50, 80], [30, 50], 3),
        ]],
        ["CALL_INV_TRIANGLE", [
            new Line([20, 20], [80, 20], 3),
            new Line([80, 20], [50, 80], 3),
            new Line([50, 80], [20, 20], 3),
        ]],
        ["SUFFIX_END", SUFFIX_TO_ICON["END"], 60, 100],
        ["SUFFIX_EVEN", SUFFIX_TO_ICON["EVEN"], 60, 100],
        ["SUFFIX_ODD", SUFFIX_TO_ICON["ODD"], 60, 100],
        ["DRAW_LINE", withPencil([
            new Line([20, 70], [80, 70], 5),
        ])],
        ["DRAW_CIRCLE", withPencil([
            new Circle([50, 70], 20),
        ])],
        ["DRAW_SQUARE", withPencil([
            new Square([50, 70], [0, 1], 20),
        ])],
        ["DRAW_TRIANGLE", withPencil([
            new Triangle([50, 70], [0, -1], 20),
        ])],
        ["FORWARD", [
            new Line([50, 80], [50, 20], 10),
            new Line([30, 40], [50, 20], 5),
            new Line([70, 40], [50, 20], 5),
        ]],
        ["ROTATE_LEFT", [
            new Arc([50, 50], 30, 0.5, { shift: 0.75, fill: "none", stroke: 5 }),
            new Line([50, 80], [60, 65], 5),
            new Line([50, 80], [60, 93], 5),
        ]],
        ["ROTATE_RIGHT", [
            new Arc([50, 50], 30, -0.5, { shift: 0.75, fill: "none", stroke: 5 }),
            new Line([50, 80], [40, 65], 5),
            new Line([50, 80], [40, 93], 5),
        ]],
        ["REVERSE", [
            new Line([20, 50], [50, 80], 3),
            new Line([20, 50], [50, 20], 3),
            new Line([50, 80], [50, 20], 3),
            new Line([50, 50], [80, 80], 3),
            new Line([50, 50], [80, 20], 3),
            new Line([80, 80], [80, 20], 3),
        ]],
        ["REPLAY", [
            new Arc([50, 50], 30, 0.85, { shift: 0.75, fill: "none", stroke: 5 }),
            new Circle([50, 20], 10),
            new Line([26, 32], [10, 35], 5),
            new Line([26, 32], [35, 45], 5),
        ]],
    ];

    PROCEDURES.concat(DYNAMIC_ARGS).forEach(name => {
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

function generateCount(count: number): Figure[] {
    const figures: Figure[] = [];
    for(let i = 1; i <= count; i++) {
        const x = 25 + i / (count + 1) * 50;
        figures.push(new Line([x, 20], [x, 80], 3));
    }
    figures.push(new Line([20, 20], [80, 20], 3));
    figures.push(new Line([20, 80], [80, 80], 3));
    return figures;
}

function generateFiveCount(): Figure[] {
    return [
        new Line([25, 20], [50, 80], 3),
        new Line([50, 80], [75, 20], 3),
        new Line([15, 20], [35, 20], 3),
        new Line([65, 20], [85, 20], 3),
    ];
}

function generateFract(filled: number, total: number): Figure[] {
    const figures: Figure[] = [];
    const size = 60 / total;
    const diff = total - filled;
    const f = (i, opts) => {
        const y = (size + 3) * i;
        figures.push(new Square([50, y], [0, 1], size, opts));
    }
    for(let i = 1; i <= diff; i++) {
        f(i, {fill: "none", stroke: 3});
    }
    for(let i = diff + 1; i <= total; i++) {
        f(i, {});
    }
    return figures;
}

function generateAngle(angle): Figure[] {
    const figures: Figure[] = [];
    figures.push(new Circle([50, 50], 40, {fill: "none", stroke: 3}));
    figures.push(new Arc([50, 50], 40, angle / 360, {close: true}));
    return figures;
}

function generateQuarterAngle(angle): Figure[] {
    const figures: Figure[] = [];
    figures.push(new Arc([10, 10], 80, 0.25, {fill: "none", close: true, stroke: 3}));
    figures.push(new Arc([10, 10], 80, angle / 360, {close: true}));
    return figures;
}

function withPencil(oldFigures: Figure[]): Figure[] {
    const figures: Figure[] = [
        new Line([20, 20], [20, 40], 3),
        new Line([20, 20], [60, 20], 3),
        new Line([20, 40], [60, 40], 3),
        new Line([60, 20], [80, 30], 3),
        new Line([60, 40], [80, 30], 3),
    ];
    return figures.concat(oldFigures);
}

main();
