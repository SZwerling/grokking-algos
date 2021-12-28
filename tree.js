class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        // const node = new Node(data);
        // this.children.push(node) below is more succinct
        this.children.push(new Node(data))
    }
    
    remove(data){
        this.children = this.children.filter((node) => {  //filter returns new arr, hence, reassign
            return node.data !== data;
        });
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }

}

function levelWidth(root){
    let counters = 0;  //widths
    const arr = [root, 's'];

    while(arr.length > 1){
        const node = arr.shift()
        if(node === 's'){
            counters.push(0);
            arr.push('s')
        } else {
            arr.push(...node.children);
            counters[counters.length-1]++;
        }
    }
    return counters;

}

const node = new Node(1)
const tree = new Tree();
tree.root = node;
node.add(32)
node.add(64)


