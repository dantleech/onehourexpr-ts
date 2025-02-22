export class Tokenizer
{
    tokenize(expression: string): Token[] {
        let i = 0;
        let tokens = [];
        while (expression[i] ?? null) {
            let char = expression[i++];
            if (this.isInt(char)) {
                while (this.isInt(expression[i] ?? null)) {
                    char += expression[i++];
                }
                tokens.push(new Token(Token.T_INT, char));
                continue;
            }

            switch (char) {
                case '+':
                    tokens.push(new Token(Token.T_ADD));
                    break;
                case '-':
                    tokens.push(new Token(Token.T_SUB));
                    break;
                case '*':
                    tokens.push(new Token(Token.T_MUL));
                    break;
                case ' ':
                    continue;
                default:
                    throw new Error(`Do not know how to parse operator: ${char}`);
            }
        }

        return tokens;
    }

    private isInt(char: string) {
        const number = Number.parseInt(char);
        if (Number.isNaN(number)) {
            return false;
        }

        return true;
    }
}

export class Token
{
    static readonly T_INT = 'int';
    static readonly T_SUB = 'sub';
    static readonly T_ADD = 'add';
    static readonly T_MUL = 'mul';

    constructor(public readonly type: string, public readonly value: string = '') {}
}
