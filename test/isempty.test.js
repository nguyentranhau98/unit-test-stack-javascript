const stack = require('../stack');

test('Test the validity of function peek of stack', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    expect(stack.isEmpty()).toBe(false);
});