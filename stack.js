//create a stack data structure
//should have push, pop, and peek

//stack is like a queue but first added last removed
//stack is first added last removed


class Stack{
    constructor(){
        this.data = [];
    }
    push(record){
        this.data[this.data.length] = record; //could also just use .push()
    }
    pop(){
        return this.data.pop()
    }
    peek(){
        return this.data[this.data.length-1]
    }
}


module.exports = Stack;

