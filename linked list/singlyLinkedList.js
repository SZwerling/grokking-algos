// SLINGLY LINKED LIST
// ..is a data structure that contains a head,
//  tail, and length property.
// It consists of nodes. Each node has a value
// and a pointer to another value or null. 
// They do not have indeces.
// Advantage over arrays is don't have to re-index when inserting and deleting.


// A linked list is a colleciotn of nodes. Let's make a node!

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const first = new Node("First")
first.next = new Node("Next")
first.next.next = new Node("third")

// To avoid .next.next -- create linked list class with methods like push.

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length ++;
        return this;
    }
    pop(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            let temp = this.head
            this.head = null;
            this.tail = this.head
            this.length--;
            return temp;
        }
        let current = this.head;
        let previous = null;
        while(current.next){
            previous = current
            current = current.next
        }
        this.tail = previous
        this.tail.next = null
        this.length --;
        return current;
    }
    shift(){
        if(!this.head){
            return undefined
        }
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return temp;
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index > this.length) return null;
        let count = 0;
        let temp = this. head
        while(count < index){
            temp = temp.next
            count++
        }
        return temp
    }
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.val = value;
            return true;
        }
        return false;
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0){
            this.unshift(value);
            return true
        };
        if(index === this.length){
            this.push(value);
            return true
        }
        const newNode = new Node(value)
        let prev = this.get(index-1)
        let oldNext = prev.next
        prev.next = newNode
        newNode.next = oldNext
        this.length++
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1){
            return this.pop()
        }
        if(index === 0){
            return this.shift()
        }
        let prev = this.get(index-1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return selected
    }
    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let next;
        while(current !== null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this;
    }
}

// push PSEUDOCODE
// function accepts value creates new node with that value
// if no head, set head and tail to that val
// otherwise, set next property on tail to be new node and increment length by one

const list = new SinglyLinkedList()
list.push('one')
list.push('two')
list.push('three')
list.push(4)
console.log(list)
// POP PSUEDOCODE
// Traverse the list with current and next.
// When next has no next, sever the connection with that last node and return it.
// current = this.head
// previous = this.head.next
//

// SHIFT PSUEDOCODE
// If no nodes return undefined
// Store current head property in temp var
// Set head property to be current head's next property
// Decrement length by one
// Return value of node removed

// UNSHIFT PSEUDOCODE
// function accepts a value
// if no head, set head and tail to be newly created node
// otherwise set new node's next property to be the old head
// set head as newly created node
// I need to review more.

// GET PSEUDOCODE
// Accepts an index (number).
// If the index is less than zero or greater than or equal to 
// the length of the list, return null.
// Loop through index and return node at specific index.

// SET PSEUDOCODE
// Accepts index and value.
// Use get method to find a given node. If not found return false.
// Update that node's value. Return true

// INSERT PSEUDOCODE
// Accepts index and value.
// If index is LESS than zero or GREATER than the length, return false.
// If index is zero, use unshift. If index is equal to length, use push.
// Otherwise use get method with index -1. Set next property on that node to be new node.
// Set new node's next to the old node's next.
// Increment length and return true.

// REMOVE PSEUDOCODE
// Takes index to be removed.
// If index is less than zero or greater than or equal to the length, return undefined.
// If index is same as length - 1, use pop()
// If index is 0, use shift()
// Otherwise use get() method to acces node at index - 1
// and set next property on that node to be the next of the next
// this.length--
// return value of removed node

// REVERSE PSEUDOCODE
// Swap head and tail.
// Create a variable called next and a variable called previous.
// Create variable called 'current' and initialize it to start at the head.
// Loop through the list.
// Set next to be .next property on whatever 'current' is.
// Set .next property on current to be whatever previous is.
// Set previous to be value of current.
// Set current to be value of next.

// BIG O OF SINGLY LINKED LIST
// insertion in O(1)
// removal from beginning can be O(1), otherwise it's O(n)
// searching O(n)
// accessing/getting O(n)
// Singly linked lists are better than arrays for inserting and deleting at the begging of the list.





