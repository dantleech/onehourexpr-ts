import {describe, expect, test} from '@jest/globals';
import {Tokenizer} from '../src/tokenizer';
import { BinaryOp, IntegerNode, Parser } from '../src/parser';

describe(Parser, () => {
    const tokenizer = new Tokenizer();
    const parser = new Parser();

    test('12', () => {
        expect(parser.parse(tokenizer.tokenize('12'))).toEqual(
            new IntegerNode(12),
        );
    });
    test('1 + 2', () => {
        expect(parser.parse(tokenizer.tokenize('1 + 2'))).toEqual(
            new BinaryOp(new IntegerNode(1), '+', new IntegerNode(2)),
        );
    });
    test('1 - 2', () => {
        expect(parser.parse(tokenizer.tokenize('1 - 2'))).toEqual(
            new BinaryOp(new IntegerNode(1), '-', new IntegerNode(2)),
        );
    });
    test('1 * 2', () => {
        expect(parser.parse(tokenizer.tokenize('1 * 2'))).toEqual(
            new BinaryOp(new IntegerNode(1), '*', new IntegerNode(2)),
        );
    });
    test('invalid expression', () => {
        expect(() => parser.parse(tokenizer.tokenize('+ +'))).toThrowError(
            'Token of type "add" is not a valid operand'
        );
    });
});

