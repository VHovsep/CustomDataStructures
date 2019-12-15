Stack is a data structure which implements an array friendly interface

# Class Methods

```javascript
Stack.push(data);
Stack.pop();
Stack.peek();
Stack.isEmpty();
Stack.printStack();
```

# Example

```javascript

const Stack = require('stack-node');

let stack = new Stack();

for (let i = 0; i < 10; i++) {
  stack.push(i);
}

console.log(stack.pop());
console.log(stack.peek());
stack.printStack();
```
