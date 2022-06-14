// Node class has value, next and previous

// Doubly linked list class has head, tail and length

class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        const oldTail = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
}

// PUSH PSEUDOCODE
// Create new node w value passed to function.
// If no node, set head and tail property to be newly created node.
// Otherwise, set next property on tail to be new node and previous
// property on new node/new tail to be old node. Update tail property to be new node.
// Increment length and return list.

// POP PSEUDOCODE
// If length is zero, return undefined.
// Otherwise, store current tail in variable to return later.
// If length is one, set head and tail to null.
// Update tail to be previous node.
// Set new tail.next to be null.

const list = new DoublyLinkedList
list.push('first')
list.push('second')
list.push(3)
console.log(list.pop())
console.log(list)