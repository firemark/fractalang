import { Token, TOKENS, ActionCb, ValueCb } from "@/core/tokens";
import { ActionNode, ValueNode } from "@/core/ast/base";
import { Function } from "@/core/ast/function";

export function parseRawTokens(rawTokens: string[]): Token[] {
    return rawTokens.map(raw => {
        const token = TOKENS[raw];
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

export function parseLineFunc(name: string, tokens: Token[]): Function {
    const actions = [];
    const tmp = new ActionTmp();
    tokens.forEach(token => {
        if (tmp.isActionSet()) {
            parseValue(token, tmp);
        } else {
            parseAction(token, tmp);
        }
    });

    tmp.pushAction(); // push last token.

    return new Function(name, tmp.getActions());
}

export function parseLineValue(tokens: Token[]): ValueNode[] {
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
}

function parseValue(token: Token, tmp: ActionTmp) {
    if (token.isAction) {
        tmp.pushAction();
        tmp.setActionToken(token);
    } else {
        const factory = token.factory as ValueCb;
        tmp.insertValue(factory());
    }
}
