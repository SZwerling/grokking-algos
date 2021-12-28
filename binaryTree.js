/* Binary Search Tree */

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {   // constructor makes root, sets to null
      this.root = null;  //no comma between constructor and method name
    }
    add(data) {                            //adding to the tree
      const node = this.root;
      if (node === null) {                 //if no root, set data to new root node
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {   //recursive function searchTree
          if (data < node.data) {             //passing in node, first is root node
            if (node.left === null) {         //if data is less than node.data, it goes to the left (if node.left is null)
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {   //if node.left is not null, start searchTree on node.left
              return searchTree(node.left);    //basically starts search again one step down, and down and down
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;   //if data is equal to node, it is not added
          }
        };
        return searchTree(node);  //calls searchTree
      }
    }
    findMin() {                  //method to find min
      let current = this.root;
      while (current.left !== null) {  //traverse left until can go no further
        current = current.left;
      }
      return current.data;
    }
    findMax() {
      let current = this.root;      
      while (current.right !== null) {  //traverse right until can go no further
        current = current.right;
      }
      return current.data;
    }
    find(data) {
      let current = this.root;
      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
        if (current === null) {
          return null;
        }
      }
      return current;
    }
    isPresent(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return true;
        }
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
    remove(data) {
      const removeNode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          // node has no children 
          if (node.left == null && node.right == null) {
            return null;
          }
          // node has no left child 
          if (node.left == null) {
            return node.right;
          }
          // node has no right child 
          if (node.right == null) {
            return node.left;
          }
          // node has two children 
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
    isBalanced() {
      return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    inOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {       
          node.left && traverseInOrder(node.left);
          result.push(node.data);
          node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
      };
    }
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
    }
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
    }
    
    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
  }
  
  
  
  const bst = new BST();    //functions used with 'new' operator are constructor functions
  
  bst.add(9);
  bst.add(4);
  bst.add(17);
  console.log(bst.findMin())
  console.log(bst.findMax())
  
  // bst.add(3);
  // bst.add(6);
  // bst.add(22);
  // bst.add(5);
  // bst.add(7);
  // bst.add(20);
  
  // console.log(bst.findMinHeight());
  // console.log(bst.findMaxHeight());
  // console.log(bst.isBalanced());
  // bst.add(10);
  // console.log(bst.findMinHeight());
  // console.log(bst.findMaxHeight());
  // console.log(bst.isBalanced());
  // console.log('inOrder: ' + bst.inOrder());
  // console.log('preOrder: ' + bst.preOrder());
  // console.log('postOrder: ' + bst.postOrder());
  
 