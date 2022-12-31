import { Function } from "@/core/ast/function";


export class FunctionsBag {
    maxIteration: number;
    bag: {[name: string]: Function};

    constructor(maxIteration, bag) {
        this.maxIteration = maxIteration;
        this.bag = bag;
    }

    findFunction(name: string, iteration: number = 0): Function | null {
        const { maxIteration } = this;
        if (iteration >= maxIteration) {
            return null;
        }

        const throwFunc = this.#throwFunc.bind(this);

        try {
            if (iteration >= maxIteration - 1) {
                throwFunc(`${name}::END`);
            }

            if (iteration % 2 == 0) {
                throwFunc(`${name}::EVEN`);
            } else {
                throwFunc(`${name}::ODD`);
            }

            for(let i = iteration; i > 0; --i) {
                throwFunc(`${name}::GE${i}`);
            }

            throwFunc(name);
        } catch(func) {
            if (func instanceof Function) {
                return func;
            } else {
                throw func;
            }
        }

        return null;
    }

    #throwFunc(name: string) {
        const func = this.bag[name];
        if (func !== undefined) {
            throw func;
        }
    }
}