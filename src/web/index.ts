import { initTokens } from "./tokens";
import { initCode } from "./code";
import { scrapeAndRun } from "./run";

import "../style/main.scss";

window.addEventListener('load', event => {
    const code = [
        {name: "F", tokens: ["DRAW_CIRCLE", "COUNT_3", "DRAW_LINE", "ARGUMENT", "CALL_F", "ARGUMENT"]},
        {name: "F", suffix: "END", tokens: ["DRAW_CIRCLE", "COUNT_5", "COUNT_2"]},
    ];
    initTokens();
    initCode(code);
    scrapeAndRun();
});
