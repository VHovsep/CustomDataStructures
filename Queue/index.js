class IndexOutOfBoundsException extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NullPointerException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        if(element === null) throw new NullPointerException("Cannot add null item in queue");
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) throw new IndexOutOfBoundsException("Queue Underflow");
        return this.items.shift();
    }

    front() {
        if(this.isEmpty()) return "No elements in Index";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        console.log(str);
    }
}

module.exports = Queue;
