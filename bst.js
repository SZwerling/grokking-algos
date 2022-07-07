// BINARY SEARCH TREE redux

class BST {
   constructor() {
      this.root = null;
   }
   insert(val) {
      if (!this.root) {
        console.log('hello')
         this.root = new Node(val);
         return this;
      }
      let current = this.root;
      while (true) {
        if(val === current.value) return undefined;
         if (val < current.value) {
            if (!current.left) {
               current.left = new Node(val);
               return this;
            } else { // this else is not necessary becuase of return statement above
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

