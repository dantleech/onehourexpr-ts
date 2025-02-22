import {describe, expect, test} from '@jest/globals';
import {Tokenizer, Token} from '../src/tokenizer';

describe(Tokenizer, () => {
    const tokenizer = new Tokenizer();

    test('1', () => {
        expect(tokenizer.tokenize('1')).toEqual([
            new Token(Token.T_INT, '1')
        ]);
    });
    test('12', () => {
        expect(tokenizer.tokenize('12')).toEqual([
            new Token(Token.T_INT, '12')
        ]);
    });
    test('+', () => {
        expect(tokenizer.tokenize('+')).toEqual([
            new Token(Token.T_ADD)
        ]);
    }); 
    test('-', () => {
        expect(tokenizer.tokenize('-')).toEqual([
            new Token(Token.T_SUB)
        ]);
    }); 
    test('*', () => {
        expect(tokenizer.tokenize('*')).toEqual([
            new Token(Token.T_MUL)
        ]);
    }); 
});

