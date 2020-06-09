const stack = require('../stack');

afterEach(() => {
    stack.clear();
});

test('Test the validity of function clear when stack is empty', () => {
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
});

test('Test the validity of function clear when stack has elements', () => {
    stack.push('nguyen');
    stack.push('tran');
    stack.push('hau');
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
});