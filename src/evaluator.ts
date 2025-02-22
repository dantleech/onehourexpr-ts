import { BinaryOp, IntegerNode, Node } from "./parser";

export class Evaluator {
    evaluate(node: Node): number {
        if (node instanceof IntegerNode) {
            return node.value;
        }

        if (node instanceof BinaryOp) {
            const left = this.evaluate(node.left);
            const right = this.evaluate(node.right);

            return ((left: number, operation: string, right: number) => {
                if (operation === '+') {
                    return left + right;
                }
                if (operation === '*') {
                    return left * right;
                }
                if (operation === '-') {
                    return left - right;
                }
                throw new Error(`Do not know how to evaluate operator: ${operation}`);
            })(left, node.operation, right);
        }

        return NaN;
    }
}
