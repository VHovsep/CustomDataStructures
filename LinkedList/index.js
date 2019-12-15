class IndexOutOfBoundsException extends Error {
    constructor(message) {
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

class Node {
    constructor(element) {
        if(element === null) throw new NullPointerException("Cannot add null item in Linked Array");
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    get(index){
        if (index < 0) throw new IndexOutOfBoundsException("Index not found");
        if (index > 0 && index > this.size) return false;
        let count = 0;
        let current = this.head;
        while (current != null) {
            if(count === index)
                return current;
            count++;
            current = current.next;
        }
        return -1;
    }

    getCurrent(){
        if(this.head === null) {

        }
    }

    insertAt(element, index) {
        if (index < 0) throw new IndexOutOfBoundsException("Index not found");
        if (index > 0 && index > this.size) return false;
        let node = new Node(element);
        let curr, prev;
        curr = this.head;
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        if (index >= this.size) throw new IndexOutOfBoundsException("Unable to get an item at index larger than list size: " + this.size);
        if (this.size === 0) throw new IndexOutOfBoundsException("Cannot get element index from null List");
        if (index < 0) throw new IndexOutOfBoundsException("Index not found");
        if (index > 0 && index > this.size) return -1;
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;
        if (index === 0) {
            this.head = curr.next;
        } else {
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.element;
    }

    removeElement(element) {
        if (this.size === 0) throw new IndexOutOfBoundsException("Cannot get element index from null List");
        if(element === null) throw new NullPointerException("Cannot add null item in Linked Array");
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) {
        if (this.size === 0) throw new IndexOutOfBoundsException("Cannot get element index from null List");
        if(element === null) throw new NullPointerException("Cannot get index of null item");
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.size === 0;
    }

    size_of_list() {
        return this.size;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

module.exports = LinkedList;
