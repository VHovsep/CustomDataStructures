LinkedList is a data structure which implements an array friendly interface

# Class Methods

```javascript
LinkedList.add(data);
LinkedList.get(index);
LinkedList.insertAt(data, index);
LinkedList.removeFrom(index);
LinkedList.removeElement(data);
LinkedList.indexOf(data);
LinkedList.isEmpty();
LinkedList.size_of_list();
LinkedList.printList();
```

# Example

```javascript

var LinkedList = require('linkedlist-demo')

var list = new LinkedList();

for (var i = 0; i < 10; i++) {
  list.add(i);
}

console.log(list.get(0));

```
