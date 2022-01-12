import { Cursor } from "./cursor";
import { parseLine, parseRawTokens } from "./parser";
import { ContextCfg, Context } from "./context";

export interface Func {
    name: string;
    tokens: string[];
}

export function exec(argument: number, maxIteration: number, functions: Func[]): Cursor {
    const cursor = new Cursor();
    const bag = {};
    functions.forEach(({name, tokens: rawTokens}) => {
        const tokens = parseRawTokens(rawTokens);
        bag[name] = parseLine(name, tokens);
    });
    const cfg = new ContextCfg({
        maxIteration: 5,
        bag: bag,
        cursor: cursor,
    });
    const context = new Context({ cfg, argument });

    startExec(context, bag);

    return cursor;
}

function startExec(context: Context, bag) {
    bag.F.exec(context);
}
