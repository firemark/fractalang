import { exec, Func } from "../exec";
import { createSvg } from "../svg";

export function run(code: Func[]) {
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

export function scrapeCode(): Func[] {
    const codeNode = document.getElementById("code");
    const code: Func[] = [];
    codeNode.querySelectorAll(".function").forEach(funcNode => {
        const name = (funcNode.querySelector(".name") as HTMLElement).dataset.name;
        const tokens: string[] = [];
        funcNode.querySelectorAll(".token").forEach(tokenNode => {
            tokens.push((tokenNode as HTMLElement).dataset.token);
        });
        code.push({name, tokens});
    });
    return code;
}
