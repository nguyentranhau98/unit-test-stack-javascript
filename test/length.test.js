const stack = require('../stack');

test('Test the validity of function length of stack', () => {
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    expect(stack.length()).toBe(3);
});