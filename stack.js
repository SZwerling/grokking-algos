//create a stack data structure
//should have push, pop, and peek

//stack is like a queue but first added last removed
//stack is first added last removed

//  IMPLEMENTATION USING ARRAY
// class Stack{
//     constructor(){
//         this.data = [];
//     }
//     push(record){
//         this.data[this.data.length] = record; //could also just use .push()
//     }
//     pop(){
//         return this.data.pop()
//     }
//     peek(){
//         return this.data[this.data.length-1]
//     }
// }

// const list = new Stack
// list.push(1)
// list.push(2)
// list.push(3)
// console.log(list.peek())
// console.log(list)


/////////////////////////////////////////////////////////////////////////////////////////

// IMPLEMENATION USING LIST-LIKE
// We're adding and removing from the beginning because that is constant time.
// If we have to traverse to the end, that's not constant time.
// Last In First Out

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }
    pop(){
        if(this.size === 0) return null;
        let temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp.val;
    }
}

const stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push('three'))
console.log(stack.push('four'))
console.log(stack.pop())


// PUSH PSEUDOCODE
// Function accepts value and creates new node.
// If no other values, set first and last to new node.
// Otherwise make temp, put current first in there, than make
// new first the first with its next as the old first.

// POP PSEUDOCODE
// If stack empty, return null.
// Temp var for first item in stack.
// If only one node, set first and last to be null.
// Otherwise set this.first prop to be next on current first.
// Decrement size.
// Return value of removed node.

// BIG O of stacks.
// Insertion: O(1)
// Removal: O(1)




