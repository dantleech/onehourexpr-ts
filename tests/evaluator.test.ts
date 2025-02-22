import {describe, expect, test} from '@jest/globals';
import {Tokenizer} from '../src/tokenizer';
import { BinaryOp, IntegerNode, Parser } from '../src/parser';
import { Evaluator } from '../src/evaluator';

describe(Evaluator, () => {
    const tokenizer = new Tokenizer();
    const parser = new Parser();
    const evaluator = new Evaluator();

    test('1', () => {
        expect(evaluator.evaluate(parser.parse(tokenizer.tokenize('1')))).toEqual(
            1
        );
    });

    test('1 + 1', () => {
        expect(evaluator.evaluate(parser.parse(tokenizer.tokenize('1 + 1')))).toEqual(
            2
        );
    });

    test('1 * 1', () => {
        expect(evaluator.evaluate(parser.parse(tokenizer.tokenize('2 * 2')))).toEqual(
            4
        );
    });

    test('2 * 2 + 3', () => {
        expect(evaluator.evaluate(parser.parse(tokenizer.tokenize('2 * 2 + 3')))).toEqual(
            10
        );
    });
});


