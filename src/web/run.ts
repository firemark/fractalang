import { exec, Func } from "../exec";
import { createSvg } from "../svg";

export function scrapeAndRun() {
    run(scrapeCode(), scrapeIterations());
}

function run(code: Func[], maxIteration: number = 3) {
    const container = document.getElementById("image");
    container.innerHTML = "";

    const argument = 1.0;
    const cursor = exec(argument, maxIteration, code);
    cursor.addMargin(20);
    const serializer = new XMLSerializer();
    const svg = createSvg(document, cursor);

    container.appendChild(svg);
}

function scrapeCode(): Func[] {
    const code: Func[] = [];
    const codeNode = document.getElementById("code");
    codeNode.querySelectorAll(".function").forEach((funcNode: HTMLElement) => {
        const isHide = funcNode.classList.contains("hide");
        if (isHide) {
            return;
        }
        const {name, prefix} = funcNode.dataset;
        const tokens: string[] = [];
        funcNode.querySelectorAll(".token").forEach(tokenNode => {
            tokens.push((tokenNode as HTMLElement).dataset.token);
        });
        const realname = prefix ? `${name}_${prefix}` : name;
        code.push({name: realname, tokens});
    });
    return code;
}

function scrapeIterations(): number {
    const iterationsNode = document.getElementById("iterations");
    const value = (iterationsNode as HTMLInputElement).value;
    return parseInt(value);
}
