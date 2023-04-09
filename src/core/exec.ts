import { Cursor } from "@/core/cursor";
import { parseLineFunc, parseLineValue, parseRawTokens } from "@/core/parser";
import { DynamicArgsKey, DYNAMIC_ARGS } from "@/core/mappings";
import { EvaluedValue } from "@/core/context";
import { FunctionsBag } from "./functionsBag";
import { StackStep } from "./step";
import { Context } from "./context";
import { Stave } from "./stave";
import { ValueNode } from "./ast/base";
import { Function } from "./ast/function";

const MAX_STEPS = 100000;

export function exec(stack: StackStep) {
    for (let step = 0; step < MAX_STEPS; step++) {
        if (stack.step().halt) {
            return;
        }
    }
    throw "Maximum steps reached";
}

export function setupExec(valueArgument: number, maxIteration: number, staves: Stave[], cursor: Cursor): StackStep {
    const argument: EvaluedValue = {
        value: valueArgument,
        strokeStyle: "solid",
        strokeThickness: 1.0,
        color: 0.0,
        isFilled: true,
    };
    const bag = new FunctionsBag(maxIteration, initFuncBag(staves));
    const valueFuncBag = initValueBag(staves);
    const context = new Context({ argument, cursor, valueFuncBag });
    return new StackStep(context, bag);
}

function initFuncBag(staves: Stave[]): Record<string, Function> {
    const bag: Record<string, Function> = {};
    staves 
        .filter(({ name }) => !DYNAMIC_ARGS.includes(name as DynamicArgsKey))
        .forEach(({ name, suffix = null, tokens: rawTokens }) => {
            const realName = toRealname(name, suffix);
            const tokens = parseRawTokens(rawTokens);
            bag[realName] = parseLineFunc(name, tokens);
        });
    return bag;
}

function initValueBag(staves: Stave[]): Record<string, ValueNode[]> {
    const bag: Record<string, ValueNode[]> = {};
    staves 
        .filter(({ name }) => DYNAMIC_ARGS.includes(name as DynamicArgsKey))
        .forEach(({ name, suffix = null, tokens: rawTokens }) => {
            const realName = toRealname(name, suffix);
            const tokens = parseRawTokens(rawTokens);
            bag[realName] = parseLineValue(tokens);
        });
    return bag;
}

function toRealname(name: string, suffix: string | null) {
    return (suffix === null || suffix.length == 0) ? name : `${name}::${suffix}`;
}