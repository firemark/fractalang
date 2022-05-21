import { exec, Func } from "../exec";
import { createSvg } from "../svg";

export function scrapeAndRun() {
    const cursorCfg = {
        firstColor: scrapeInput("first-color"),
        secondColor: scrapeInput("second-color"),
        strokeSize: scrapeInputAsFloat("stroke-size"),
    }
    const imageNode = document.getElementById("image");
    const code = scrapeCode(document.getElementById("code"));
    run(imageNode, code, scrapeInputAsInt("iterations"), cursorCfg);
}

export function run(imageNode: HTMLElement, code: Func[], maxIteration: number = 3, cursorCfg = {}) {
    imageNode.innerHTML = "";

    const argument = 1.0;
    const cursor = exec(argument, maxIteration, code, cursorCfg);
    cursor.addMargin(20);
    const serializer = new XMLSerializer();
    const svg = createSvg(document, cursor);

    imageNode.appendChild(svg);
}

export function scrapeCode(codeNode: HTMLElement): Func[] {
    const code: Func[] = [];
    codeNode.querySelectorAll(".function").forEach((funcNode: HTMLElement) => {
        const isHide = funcNode.classList.contains("hide");
        if (isHide) {
            return;
        }
        const {name, suffix} = funcNode.dataset;
        const tokens: string[] = [];
        funcNode.querySelectorAll(".fract-token").forEach(tokenNode => {
            tokens.push((tokenNode as HTMLElement).dataset.token);
        });
        const realname = suffix ? `${name}::${suffix}` : name;
        code.push({name: realname, tokens});
    });
    return code;
}

function scrapeInput(id: string): string {
    const node = document.getElementById(id);
    return (node as HTMLInputElement).value;
}

function scrapeInputAsInt(id: string): number {
    const value = scrapeInput(id);
    return parseInt(value);
}

function scrapeInputAsFloat(id: string): number {
    const value = scrapeInput(id);
    return parseFloat(value);
}
