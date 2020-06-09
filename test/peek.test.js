const stack = require('../stack');

afterEach(() => {
    stack.clear();
});

test('Test the validity of function peek of stack', () => {
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    expect(stack.peek()).toBe('hello world');
});