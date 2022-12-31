import { Cursor } from "@/core/cursor";
import { DYNAMIC_ARGS, parseLineFunc, parseLineValue, parseRawTokens } from "@/core/parser";
import { EvaluedValue } from "@/core/context";
import { FunctionsBag } from "./functionsBag";
import { StackStep } from "./step";
import { Context } from "./context";
import { ValueNode } from "./ast/base";

export interface Func {
    name: string;
    tokens: string[];
}

const MAX_STEPS = 100000;

export function exec(stack: StackStep) {
    for (let step = 0; step < MAX_STEPS; step++) {
        if (stack.step().halt) {
            return;
        }
    }
    throw "Maximum steps reached";
}

export function setupExec(valueArgument: number, maxIteration: number, functions: Func[], cursor: Cursor): StackStep {
    const argument: EvaluedValue = {
        value: valueArgument,
        strokeStyle: "solid",
        strokeThickness: 1.0,
        color: 0.0,
        isFilled: true,
    };
    const bag = new FunctionsBag(maxIteration, initFuncBag(functions));
    const valueFuncBag = initValueBag(functions);
    const context = new Context({ argument, cursor, valueFuncBag });
    return new StackStep(context, bag);
}

function initFuncBag(functions: Func[]) {
    const bag = {};
    functions
        .filter(({ name }) => !DYNAMIC_ARGS.includes(name))
        .forEach(({ name, tokens: rawTokens }) => {
            const tokens = parseRawTokens(rawTokens);
            bag[name] = parseLineFunc(name, tokens);
        });
    return bag;
}

function initValueBag(functions: Func[]): { [name: string]: ValueNode[] } {
    const bag = {};
    functions
        .filter(({ name }) => DYNAMIC_ARGS.includes(name))
        .forEach(({ name, tokens: rawTokens }) => {
            const tokens = parseRawTokens(rawTokens);
            bag[name] = parseLineValue(tokens);
        });
    return bag;
}