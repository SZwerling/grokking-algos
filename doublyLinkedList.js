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
}

// PUSH PSEUDOCODE
// Create new node w value passed to function.
// If no node, set head and tail property to be newly created node.
// Otherwise, set next property on tail to be new node and previous
// property on new node/new tail to be old node. Update tail property to be new node.
// Increment length and return list.

const list = new DoublyLinkedList
console.log(list.push('first'))
console.log(list.push('second'))
console.log(list.push(3))