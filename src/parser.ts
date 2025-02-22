import { Token } from "./tokenizer";


export class Parser {
    parse(tokens: Token[]): Node {
        const token = tokens.shift();

        if (undefined === token) {
            throw new Error(`Unexpected end of expression`);
        }

        let node = null;
        if (token.type === Token.T_INT) {
            node = new IntegerNode(Number.parseInt(token.value));
        }

        if (node === null) {
            throw new Error(`Token of type "{token.type}" is not a valid operand`);
        }

        return node;
    }
}

export class IntegerNode implements Node {
    constructor(public readonly value: number) {}
}

interface Node {}
