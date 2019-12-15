const Stack = require("./index");

let stack = new Stack();
stack.push("firstItem");
stack.push("secondItem");
stack.push("thirdItem");
console.log(stack.pop());
console.log(stack.peek());
stack.printStack();
