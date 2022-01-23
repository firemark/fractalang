import { Token, tokens, ActionCb, ValueCb } from "./tokens";
import { Node, ActionNode, ValueNode } from "./ast/base";
import { Function } from "./ast/actions";

export const DYNAMIC_ARGS = ["DIAMOND", "INV_TRIANGLE"];
export const PROCEDURES = ["F", "G", "H"];

export function parseRawTokens(rawTokens: string[]): Token[] {
    return rawTokens.map(raw => {
        const token = tokens[raw];
        if (!token) {
            throw `Parsing error: ${raw} is not undefined as token.`;
        }
        return token;
    });
}

class ActionTmp {
    public actions: ActionNode[];
    private values: ValueNode[];
    private token: Token | null;

    constructor() {
        this.actions = [];
        this.values = [];
        this.token = null;
    }

    setActionToken(token: Token) {
        this.token = token;
    }

    getActionToken(): Token | null {
        return this.token;
    }

    getValuesLength(): number {
        return this.values.length;
    }

    isActionSet(): boolean {
        return this.token !== null;
    }

    pushAction() {
        if (!this.isActionSet()) {
            return;
        }
        const factory = this.token.factory as ActionCb;
        const action = factory(this.values);
        this.actions.push(action);
        this.values = [];
        this.token = null;
    }

    insertValue(value: ValueNode) {
        this.values.push(value);
    }

    getActions() {
        return this.actions;
    }
}

export function parseLine(name: string, tokens: Token[]) {
    if (DYNAMIC_ARGS.indexOf(name) > -1) {
        return parseLineValue(tokens);
    } else {
        return parseLineFunc(name, tokens);
    }
}

function parseLineFunc(name: string, tokens: Token[]) {
    const actions = [];
    const tmp = new ActionTmp();
    tokens.forEach(token => {
        if (tmp.isActionSet()) {
            parseValue(token, tmp);
        } else {
            parseAction(token, tmp);
        }
    });

    if (tmp.getValuesLength() > 0) {
        tmp.pushAction();
    }

    return new Function(name, tmp.getActions());
}

function parseLineValue(tokens: Token[]): ValueNode[] {
    return tokens.map(token => {
        if (token.isAction) {
            throw "Parsing error: No actions are allowed";
        }
        if (token.isDynamic) {
            throw "Parsing error: No dynamic elements are allowed";
        }
        const factory = token.factory as ValueCb;
        return factory();
    });
}

function parseAction(token: Token, tmp: ActionTmp) {
    if (!token.isAction) {
        throw "Parsing error: token is not an action";
    }
    tmp.setActionToken(token);
    if (token.valueSize === 0) {
        tmp.pushAction();
    }
}

function parseValue(token: Token, tmp: ActionTmp) {
    const { valueSize } = tmp.getActionToken();
    if (token.isAction) {
        if (valueSize !== "+" && tmp.getValuesLength() < valueSize) {
            throw "Parsing error: token has not enough values";
        }
        tmp.pushAction();
        tmp.setActionToken(token);
        return;
    } else {
        const factory = token.factory as ValueCb;
        tmp.insertValue(factory());
    }
}
