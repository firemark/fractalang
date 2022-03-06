import { initTokens } from "./tokens";
import { initCode } from "./code";
import { scrapeAndRun } from "./run";

import "../style/main.scss";

document.getElementById("action-hide").addEventListener('click', () => {
    document.getElementById("action-hide").classList.add("hidden");
    document.getElementById("action-show").classList.remove("hidden");
    document.getElementById("code-panel").classList.add("hidden");
    return false;
}, false);

document.getElementById("action-show").addEventListener('click', () => {
    document.getElementById("action-show").classList.add("hidden");
    document.getElementById("action-hide").classList.remove("hidden");
    document.getElementById("code-panel").classList.remove("hidden");
    return false;
}, false);

window.addEventListener('load', event => {
    const code = [
        {name: "F", tokens: ["DRAW_TRIANGLE", "COUNT_3", "DRAW_LINE", "ARGUMENT", "CALL_F", "ARGUMENT"]},
        {name: "F", suffix: "END", tokens: ["DRAW_CIRCLE", "COUNT_5", "COUNT_2"]},
    ];
    initTokens();
    initCode(code);
    scrapeAndRun();
});
