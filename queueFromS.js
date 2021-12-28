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
//     pek(){
//         return this.data[this.data.length-1]
//     }
// }

const Stack = require('./stack');



class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record)
    }

    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while(this.second.peek()){
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek(){

        while(this.first.peek()){
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record;
    }
}


const list = new Queue;

list.add(1)
list.add('Slim')
list.add('Zwerling')
list.add(46)

console.log(list)
console.log(list.peek())
console.log(list.remove())
console.log(list)

