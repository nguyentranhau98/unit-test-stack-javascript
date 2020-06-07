const stack = require('../stack');

test('Test the validity of function push of stack with an integer', () => {
    expect(stack.push(1)).toBe(1);
});

test('Test the validity of function push of stack with a character', () => {
    expect(stack.push('a')).toBe('a');
});

test('Test the validity of function push of stack with a string', () => {
    expect(stack.push('hello world')).toBe('hello world');
});