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
        this.head = this.head.next;
        this.length --;
        return temp;
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
// pop PSUEDOCODE
// Traverse the list with current and next.
// When next has no next, sever the connection with that last node and return it.
// current = this.head
// previous = this.head.next
//

// shift PSUEDOCODE
// If no nodes return undefined
// Store current head property in temp var
// Set head property to be current head's next property
// Decrement length by one
// Return value of node removed
console.log(list.shift)
console.log(list)



