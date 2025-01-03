import { Cursor } from "@/core/cursor";
import { exec, setupExec } from "@/core/exec";
import { createSvg } from "@/core/renderers/svg";
import { DOMImplementation, XMLSerializer } from "xmldom";

function main() {
    const argument = 100.0;
    const maxIteration = 16;
    const cursor = new Cursor();
    const code = [
        {
            name: "F",
            tokens: [
                "CALL_G", "ARGUMENT",
                "CALL_F", "FRACT_3_4", "ARGUMENT",
            ],
        },
        {
            name: "G",
            tokens: [
                "MOVE_FORWARD", "FRACT_1_2", "FRACT_1_3", "ARGUMENT",
                "DRAW_CIRCLE", "FRACT_1_3", "FRACT_1_3", "ARGUMENT",
                "MOVE_FORWARD", "FRACT_1_2", "FRACT_1_3", "ARGUMENT",
                "DRAW_LINE", "ARGUMENT",
                "ROTATE_LEFT", "ANGLE_30",
            ],
        },
    ];
    const stack = setupExec(argument, maxIteration, code, cursor);
    exec(stack);
    const document =
        new DOMImplementation()
            .createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svg = createSvg(document, cursor);
    const content = new XMLSerializer().serializeToString(svg);
    console.log(content);
}


main();
