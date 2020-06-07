const stack = require('../stack');

global.console = {
    warn: jest.fn(),
    log: jest.fn()
}

test('Test the validity of function print of stack', () => {
    stack.push(1);
    stack.push('a');
    stack.push('hello world');
    stack.print()
    expect(global.console.log).toHaveBeenCalledWith("1,a,hello world");
});