import { Cursor } from "./cursor";

export type StrokeStyle = "solid" | "dotted" | "dashed";

export interface EvaluedValue {
    value?: number;
    color?: number;
    strokeStyle?: StrokeStyle;
    strokeThickness?: number;
    isFilled?: boolean;
    valueTransformer?: (a: number, b: number) => number;
}

export class ContextCfg {
    maxIteration: number;
    cursor: Cursor;
    bag: any;

    constructor({maxIteration, bag, cursor}) {
        this.maxIteration = maxIteration;
        this.cursor = cursor;
        this.bag = bag;
    }
}

export class Context {
    public iteration: number;
    public argument: EvaluedValue;
    private cfg: ContextCfg;

    constructor({cfg, argument, iteration = 0}) {
        this.cfg = cfg;
        this.argument = argument;
        this.iteration = iteration;
    }

    findFunction(name: string) {
        const iteration = this.iteration;
        if (iteration >= this.cfg.maxIteration) {
            return null;
        }

        const namesToFind = [];
        if (iteration >= this.cfg.maxIteration - 1) {
            namesToFind.push(`${name}::END`);
        }
        namesToFind.push(`${name}::${iteration % 2 ? 'ODD' : 'EVEN'}`);
        for(let i = iteration; i > 0; --i) {
            namesToFind.push(`${name}::GE${i}`);
        }
        namesToFind.push(name);

        const existFuncName = namesToFind.find(name => this.cfg.bag[name]);
        return existFuncName ? this.cfg.bag[existFuncName] : null;
    }

    getCursor(): Cursor {
        return this.cfg.cursor;
    }

    createNewContext(newArgument: EvaluedValue) {
        return new Context({
            cfg: this.cfg,
            argument: newArgument,
            iteration: this.iteration + 1,
        });
    }
}
