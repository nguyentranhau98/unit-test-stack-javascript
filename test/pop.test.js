const stack = require('../stack');

afterEach(() => {
    stack.clear();
});

test('Test the validity of function pop of stack with a number', () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
});

test('Test the validity of function push of stack with a character', () => {
    expect(stack.push('a')).toBe('a');
});

test('Test the validity of function push of stack with a string', () => {
    expect(stack.push('hello world')).toBe('hello world');
});