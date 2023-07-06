class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {  // don't really need an else after return
            let current = this.root;
            while(true){
                if(value === current.value) return undefined; //'that value already exists'
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else { //don't need else after return
                        current = current.left
                    }
                } else if(value > current.value){  // don't need this else
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else { // don't need this else
                        current = current.right;
                    }
                }
            }
        }
    }
}

const tree = new BST
tree.insert(5)
tree.insert(6)
tree.insert(4)
tree.insert(9)
tree.insert(11)
tree.insert(7)
console.log(tree)