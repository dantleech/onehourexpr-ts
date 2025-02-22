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
            throw new Error(`Token of type "${token.type}" is not a valid operand`);
        }

        const operator = tokens.shift();

        // no more tokens, we're finished
        if (undefined === operator) {
            return node;
        }

        return new BinaryOp(
            node,
            ((type) => {
                if (type === Token.T_MUL) return '*';
                if (type === Token.T_ADD) return '+';
                if (type === Token.T_SUB) return '-';

                throw new Error(`Unknown operator type: "${type}"`);
            })(operator.type),
            this.parse(tokens)
        );
    }
}

export class IntegerNode implements Node {
    constructor(public readonly value: number) {}
}

export class BinaryOp implements Node {
    constructor(public readonly left: Node, public readonly operation: string, public readonly right: Node) {}
}

export interface Node {
}
