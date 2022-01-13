import { exec } from "./exec";
import { createSvg } from "./svg";
import { tokens } from "./tokens";

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

function renderTokens() {
    const container = document.getElementById("tokens");
    container.innerHTML = "";
    Object.keys(tokens).forEach(token => {
        const node = document.createElement("li");
        node.innerText = token;
        container.appendChild(node);
    });
}

function renderCode(code) {
    const container = document.getElementById("code");
    container.innerHTML = "";
    code.forEach(({name, tokens}) => {
        const node = document.createElement("li");

        const nameNode = document.createElement("span");
        nameNode.innerText = name;
        node.appendChild(nameNode);

        const tokensNode = document.createElement("ul");
        tokens.forEach(token => {
            const tokenNode = document.createElement("li");
            tokenNode.innerText = token;
            tokensNode.appendChild(tokenNode);
        });
        node.appendChild(tokensNode);

        container.appendChild(node);
    });
}

window.addEventListener('load', event => {
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
    renderTokens();
    renderCode(code);
    run(code);
});
