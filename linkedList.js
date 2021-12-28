class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}



class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data, this.head);//this.head = new Node(data, this.head) is shorter
        this.head = node;
    }

    size(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        if(this.head){
            return this.head;
        } else {
            return null;
        }

    }

    getLast(){
        if(!this.head) {
            return null;
        }
        let node = this.head;
        while(node){
            if(node.next === null){
                return node
            }
            node = node.next
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(this.head){
            return this.head = this.head.next;
        }
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node = node.next;
        }
            previous.next = null;
            return;
    }

    insertLast(data){
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
            return;
        } else {
            this.head = new Node(data)
        }   
    }
    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(index === counter){
                return node;
            } else {
                node = node.next;
                counter++;
            } 
        }
        return null;
    }
    removeAt(index){
        if(!this.head){
            return;
        }
        if(index === 0){
            this.removeFirst();
            return;
        }
        let previous = this.getAt(index-1)
        let current = this.getAt(index)
        if(!current){
            return;
        }
        previous.next = current.next
    }
    insertAt(data, index){
        let current = this.getAt(index)
        let previous = this.getAt(index-1)
        if(!current){
            this.insertLast(data);
            return;
        }
        if(!previous){
            this.insertFirst(data);
            return
        }
        const node = new Node(data, current)
        previous.next=node;
    }
    forEach(fn){
        let node = this.head;
        while(node){
            fn(node)
            node = node.next;
        }
    }
}

const list = new LinkedList;

list.insertFirst('first')
list.insertLast('last')
list.insertAt('middle', 12)
list.insertLast('las')
list.insertLast('lastlyq')
list.insertLast('lastlyzz')

list.forEach((node) => {
    node.data += 'hello';
})


//find midpoint of lined list wout getSize() and only go through list once.
function midpoint(someList){
    let slow = someList.head;
    let fast = someList.head;
    while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
    }
    return slow;
}

//check to see if linked list is circular
function circular(someList){
    let slow = someList.head;
    let fast = someList.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}

//given a list and 'n' return node n spaces from the last node of the list. Do not call 'getSize()'
function fromLast(someList, n){
    let slow = someList.head;
    let fast = someList.head;
    let counter = 0;
    while(counter <= n){
        fast = fast.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    return slow
    
}

console.log(midpoint(list))




