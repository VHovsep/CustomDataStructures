const Queue = require('./index');

let queue = new Queue();

for (let i = 0; i < 10; i++) {
    queue.enqueue(i);
}

if(!queue.isEmpty()){
    queue.printQueue();
}

console.log(queue.front());
console.log(queue.dequeue());
queue.printQueue();
