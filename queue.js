// Create a queue data structure
// The queue should be a class with methods 'add' and 'remove'.
// Adding to the queue should store and element until it is removed.

// implement a peek method.
// Should return the last element (next one to be returned) without
// removing it.

//queue is like a stack, but first added first removed
//stack is first added last removed

// class Queue{
//     constructor(color = ''){  // this constructor is just to make a constructor
//         this.color = color;
//         this.data = [];
//     }
//     add(record){
//         this.data.unshift(record);
//     }
//     remove(){
//         return this.data.pop()
//     }
//     peek(){
//         return this.data[this.data.length-1]
//     }
// }

// const q1 = new Queue('orange')
// const q2 = new Queue();
// q1.add(1)
// q2.add('1')
// q1.add(2)
// q2.add('too')
// q1.add(3)
// q2.add('three')
// q2.add('four')
// q2.add('five')



// function weave(x, y){
//     const len = x.data.length > y.data.length ? x.data.length : y.data.length
    
//     const tap = new Queue();
//     for(let i = 0; i <= len -1; i++){ // or while(x.peek() || y.peek())
//       if(x.peek()){
//           tap.add(x.remove())
//         }
//       if(y.peek()){
//           tap.add(y.remove())
//         }
//     }
//         return tap
// }


// console.log(q1)

// QUEUE FROM SCRATCH

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    add(val){
        const newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    remove(){
        if(!this.first) return null;
        if(this.first === this.last){
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next
        this.size--;
        return temp;

    }
}

const cue = new Queue
cue.add(1)
cue.add(2)
console.log(cue.add(3))
console.log(cue.remove())
console.log(cue.remove())
console.log(cue.remove())
console.log(cue.remove())
console.log(cue)

// BIG O OF QUEUES
// Insertion: O(1)
// Removal: O(1)
