
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
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if (!this.isEmpty()) {
            this.top = this.top - 1;
            return this.data.pop();
        }
        throw new Error('Empty Stack Exception');
    }

    search(element) {
        for(let i = 0; i < this.top; i++) {
            if(this.data[i] === element) return i;
        };
        return -1;
    }

    print() {
        console.log(this.data.toString());
    }

}

module.exports = new Stack();