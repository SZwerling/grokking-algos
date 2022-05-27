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
        
    }
}

