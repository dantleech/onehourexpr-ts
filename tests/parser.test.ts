import {describe, expect, test} from '@jest/globals';
import {Tokenizer} from '../src/tokenizer';
import { IntegerNode, Parser } from '../src/parser';

describe(Tokenizer, () => {
    const tokenizer = new Tokenizer();
    const parser = new Parser();

    test('12', () => {
        expect(parser.parse(tokenizer.tokenize('12'))).toEqual(
            new IntegerNode(12),
        );
    });
});

