const stack = require('../stack');

afterEach(() => {
    stack.clear();
});

test('Test the validity of function search of stack', () => {
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    expect(stack.search('a')).toBe(1);
    expect(stack.search('hello world')).toBe(2);
    expect(stack.search('b')).toBe(-1);
});
