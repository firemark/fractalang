import { ActionNode } from "./base";

export class Function {
    name: string;
    actions: ActionNode[];

    constructor(name: string, actions: ActionNode[]) {
        this.name = name;
        this.actions = actions;
    }

    get size(): number {
        return this.actions.length;
    }
}