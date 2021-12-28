// Create a queue data structure
// The queue should be a class with methods 'add' and 'remove'.
// Adding to the queue should store and element until it is removed.

// implement a peek method.
// Should return the last element (next one to be returned) without
// removing it.

//queue is like a stack, but first added first removed
//stack is first added last removed

class Queue{
    constructor(color = 'black'){
        this.color = color;
        this.data = [];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(){
        return this.data.pop()
    }
    peek(){
        return this.data[this.data.length-1]
    }
}

const q1 = new Queue('orange')
const q2 = new Queue();
q1.add(1)
q2.add('1')
q1.add(2)
q2.add('too')
q1.add(3)
q2.add('three')
q2.add('four')
q2.add('five')



function weave(x, y){
    const len = x.data.length > y.data.length ? x.data.length : y.data.length
    
    const tap = new Queue();
    for(let i = 0; i <= len -1; i++){ // or while(x.peek() || y.peek())
      if(x.peek()){
          tap.add(x.remove())
        }
      if(y.peek()){
          tap.add(y.remove())
        }
    }
        return tap
}

console.log(weave(q1, q2))
console.log(q1.color)


