import { Context } from "@/core/context";

export abstract class ActionResult { }

export class ContinueR extends ActionResult { }

export class JumpR extends ActionResult {
    count: number;

    constructor(count: number) {
        super();
        this.count = count;
    }
}

export class CallR extends ActionResult {
    stave: string;
    newContext: Context;

    constructor(stave: string, context: Context) {
        super();
        this.stave = stave;
        this.newContext = context;
    }
}

export class ReverseR extends ActionResult {
    count: number;

    constructor(count: number) {
        super();
        this.count = count;
    }
}