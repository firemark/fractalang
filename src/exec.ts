import { Cursor } from "./cursor";
import { parseLine, parseRawTokens } from "./parser";
import { ContextCfg, Context } from "./context";

export interface Func {
    name: string;
    tokens: string[];
}

export function exec(valueArgument: number, maxIteration: number, functions: Func[], cursorCfg = {}): Cursor {
    const cursor = new Cursor(cursorCfg);
    const bag = {};
    functions.forEach(({name, tokens: rawTokens}) => {
        const tokens = parseRawTokens(rawTokens);
        bag[name] = parseLine(name, tokens);
    });
    const cfg = new ContextCfg({ maxIteration, bag, cursor: cursor });
    const argument = {
        value: valueArgument,
        strokeStyle: "solid",
        strokeThickness: 1.0,
        color: 0.0,
        isFilled: true,
    };
    const context = new Context({ cfg, argument });

    startExec(context, bag);

    return cursor;
}

function startExec(context: Context, bag) {
    const func = context.findFunction("START") || context.findFunction("F");
    if (func) {
        func.exec(context);
    }
}
