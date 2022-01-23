import { initTokens } from "./tokens";
import { initCode } from "./code";
import { scrapeAndRun } from "./run";

import "../style/main.scss";

window.addEventListener('load', event => {
    const code = [
        {name: "F", tokens: ["DRAW_CIRCLE", "COUNT_3"]},
    ];
    initTokens();
    initCode(code);
    scrapeAndRun();
});
