// BINARY SEARCH TREE redux

class BST {
   constructor() {
      this.root = null;
   }
   insert(val) {
      if (!this.root) {
         this.root = new Node(val);
         return this;
      }
      let current = this.root;
      while (true) {
         if (val === current.value) return undefined;
         if (val < current.value) {
            if (!current.left) {
               current.left = new Node(val);
               return this;
            } else {
               // this else is not necessary becuase of return statement above
               current = current.left;
            }
         } else {
            if (val > current.value) {
               if (!current.right) {
                  current.right = new Node(val);
                  return this;
               } else {
                  current = current.right;
               }
            }
         }
      }
   }
   find(val) {
      if (!this.root) return false;
      let current = this.root;
      while (current) {
         if (val < current.value) {
            current = current.left
            console.log('go left')
         } else if(val > current.value) {
            current = current.right;
            console.log('go right')
         } else if(val === current.value){
            console.log('equals')
            return true
         } else {
            return false //in case a string or some such nonsense is entered
         }
      }
      return false
   }
}

class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

// INSERT PSEUDOCODE (iterative)
// Create new Node. If no root, voila, node is root.
// If root, check if newNode is greater, if so, check if node to the right and repeat.
// If less than root, check if node to the left and repeat.

// FIND PSEUDOCODE
// Very similar to insert.

const quack = new BST
quack.insert(10)
quack.insert(20)
quack.insert(5)
quack.insert(22)
quack.insert(3)
quack.insert(-3)
console.log(quack.find(3))