import { Token, tokens, ActionCb, ValueCb } from "./tokens";
import { Node, ActionNode, ValueNode } from "./ast_base";
import { Function } from "./ast";


export function parseRawTokens(rawTokens: string[]): Token[] {
    return rawTokens.map(raw => {
        const token = tokens[raw];
        if (!token) {
            throw `Parsing error: ${raw} is not undefined as token.`;
        }
        return token;
    });
}

export function parseLine(name: string, tokens: Token[]): Function {
    const actions: ActionNode[] = [];
    let values: ValueNode[] = [];
    let actionToken: Token | null = null;
    const pushAction = () => {
        const factory = actionToken.factory as ActionCb;
        actions.push(factory(values));
        values = [];
    };
    tokens.forEach(token => {
        if (actionToken === null) {
            actionToken = parseAction(token, pushAction);
        } else {
            actionToken = parseValue(token, actionToken, values, pushAction);
        }
    });

    if (values.length > 0) {
        pushAction();
    }

    return new Function(name, actions);
}

function parseAction(token: Token, pushAction: () => void) {
    if (!token.isAction) {
        throw "Parsing error: token is not an action";
    }
    if (token.valueSize === 0) {
        pushAction();
        return null;
    }
    return token;
}

function parseValue(token: Token, actionToken: Token, values: ValueNode[], pushAction: () => void) {
    const { valueSize } = actionToken;
    if (token.isAction) {
        if (valueSize !== "+" && values.length < valueSize) {
            throw "Parsing error: token has not enough values";
        }
        pushAction();
        return token;
    }
    const factory = token.factory as ValueCb;
    values.push(factory());
    return actionToken;
}
