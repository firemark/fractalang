import { initTokens } from "./tokens";
import { initCode } from "./code";
import { run } from "./run";

import "../style/main.scss";

window.addEventListener('load', event => {
    const code = [
        {name: "F", tokens: []},
    ];
    initTokens();
    initCode(code);
    // run(code);
});
