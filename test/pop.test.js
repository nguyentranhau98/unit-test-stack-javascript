const stack = require('../stack');

test('Test the validity of function pop of stack', () => {
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    expect(stack.pop()).toBe('hello world');
});

// test('Test the validity of function push of stack with a character', () => {
//     expect(stack.push('a')).toBe('a');
// });

// test('Test the validity of function push of stack with a string', () => {
//     expect(stack.push('hello world')).toBe('hello world');
// });