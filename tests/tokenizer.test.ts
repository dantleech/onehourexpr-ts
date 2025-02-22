import {describe, expect, test} from '@jest/globals';
import {Tokenizer, Token} from '../src/tokenizer';

describe(Tokenizer, () => {
    const tokenizer = new Tokenizer();
    test('1', () => {
        expect(tokenizer.tokenize('1')).toBe(new Token(Token.T_INT, '1'))
    });
});

