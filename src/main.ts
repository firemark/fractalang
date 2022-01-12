import { exec } from "./exec";
import { createSvg } from "./svg";
import { DOMImplementation, XMLSerializer } from "xmldom";

function main() {
    const argument = 100.0;
    const maxIteration = 5;
    const figures = exec(argument, maxIteration, [
        {
            name: "F",
            tokens: [
                "CALL_G", "ARGUMENT",
                "CALL_F", "FRACT_1_2", "ARGUMENT",
            ],
        },
        {
            name: "G",
            tokens: [
                //"FORWARD", "ARGUMENT",
                "DRAW_LINE", "ARGUMENT",
                "ROTATE_LEFT", "ANGLE_30",
            ],
        },
    ]);
    /*
    figures.forEach(f => {
        console.log("    -", f);
    });
    */
    const document =
        new DOMImplementation()
        .createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const serializer = new XMLSerializer();
    console.log(createSvg(document, serializer, figures));
}


main();
