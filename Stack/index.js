class IndexOutOfBoundsException extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class Stack {
    constructor(_max) {
        this.top = -1;
        this.max = _max;
        this.stack = [];
    }

    push(element) {
        if (this.top >= (this.max - 1))
            throw new IndexOutOfBoundsException("Index Overflow");
        this.stack.push(element);
        this.top++;
    }

    pop() {
        if (this.top < 0)
            throw new IndexOutOfBoundsException("Index Underflow");
        this.top--;
        return this.stack.pop();
    }

    peek() {
        if (this.top < 0)
            throw new IndexOutOfBoundsException("Index Underflow");
        return this.stack[this.top];
    }

    isEmpty() {
        return this.top <= 0;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.stack.length; i++)
            str += this.stack[i] + " ";
        console.log(str);
    }
}

module.exports = Stack;
