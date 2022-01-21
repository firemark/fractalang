import { exec } from "../exec";
import { createSvg } from "../svg";
import { renderTokens } from "./tokens";
import { renderCode } from "./code";

import "../style/main.scss";

function run(code) {
    const container = document.getElementById("image");
    container.innerHTML = "";

    const argument = 100.0;
    const maxIteration = 16;
    const cursor = exec(argument, maxIteration, code);
    cursor.addMargin(20);
    const serializer = new XMLSerializer();
    const svg = createSvg(document, cursor);

    container.appendChild(svg);
}

window.addEventListener('load', event => {
    const code = [{name: "F", tokens: []}];
    /*
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
                "FORWARD", "FRACT_1_2", "FRACT_1_3", "ARGUMENT",
                "DRAW_CIRCLE", "FRACT_1_3", "FRACT_1_3", "ARGUMENT",
                "ROTATE_LEFT", "ANGLE_30",
                "FORWARD", "FRACT_1_2", "FRACT_1_3", "ARGUMENT",
                "DRAW_LINE", "ARGUMENT",
            ],
        },
    ];
    */
    renderTokens();
    renderCode(code);
    run(code);
});
