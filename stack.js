
class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top++;
        return this.data[this.top - 1];
    }

    length() {
        return this.top;
    }

    peek() {
        if (this.top === 0) throw new Error('Empty Stack Exception');
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if (this.top === 0) throw new Error('Empty Stack Exception');
        let data = this.peek();
        this.top = this.top - 1;
        delete this.data[this.top];
        return data;
    }

    search(element) {
        for (let i = 0; i < this.top; i++) {
            if (this.data[i] === element) return i;
        };
        return -1;
    }

    print() {
        console.log(this.data.toString());
    }

    clear() {
        this.top = 0;
        this.data = [];
    }

}

module.exports = new Stack();