const stack = require('../stack');

global.console = {
    warn: jest.fn(),
    log: jest.fn()
}

afterEach(() => {
    stack.clear();
});

test('Test the validity of function isEmpty of stack when stack goes from empty to not empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    expect(stack.isEmpty()).toBe(false);
});

test('Test the validity of function isEmpty when stack is not empty', () => {
    stack.push('hello');
    expect(stack.isEmpty()).toBe(false);
});

test('Test the validity of function isEmpty when stack goes from not empty to empty', () => {
    stack.push("BKDN");
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
});

test('Test isEmpty when pop empty stack', () => {
    try {
        stack.pop();
    } catch (error) {
        console.log(error)
    }
    expect(stack.isEmpty()).toBe(true);
});
