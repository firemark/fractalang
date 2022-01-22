import { Cursor } from "./cursor";

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
    public argument: number;
    private cfg: ContextCfg;
    private index: number;

    constructor({cfg, argument, iteration = 0}) {
        this.cfg = cfg;
        this.argument = argument;
        this.iteration = iteration;
        this.index = 0;
    }

    findFunction(name: string) {
        if (this.iteration >= this.cfg.maxIteration) {
            return null;
        }
        return this.cfg.bag[name] || null;
    }

    shift(distance: number) {
        this.index += Math.round(distance);
        if (this.index < 0) {
            this.index = 0;
        }
    }

    getIndex(): number {
        return this.index;
    }

    getCursor(): Cursor {
        return this.cfg.cursor;
    }

    createNewContext(newArgument: number) {
        return new Context({
            cfg: this.cfg,
            argument: newArgument,
            iteration: this.iteration + 1,
        });
    }
}
