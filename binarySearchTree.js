class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
   insert(data) {
      if (data < this.data && this.left) {
         this.left.insert(data);
      } else if (data < this.data) {
         this.left = new Node(data);
      } else if (data > this.data && this.right) {
         this.right.insert(data);
      } else if (data > this.data) {
         this.right = new Node(data);
      }
   }
   contains(data) {
      if(this.data === data){
         return this
      } else if(this.data < data && this.right){
      return this.right.contains(data)
      } else if(this.data > data && this.left){
       return  this.left.contains(data)
      }
      return null;
   }
}

function validate(node, min = null, max = null) {     //to validate binary search tree
   if(max !== null && node.data > max){
      return false;
   }

   if(min !== null && node.data < min){
      return false;
   }

   if(node.left && !validate(node.left, min, node.data)){
      return false;
   }

   if(node.right && !validate(node.right, node.data, max)){
      return false;
   }

   return true;
}   

const tree = new Node(5);
tree.insert(10);
tree.insert(1);
tree.insert(-2)
tree.insert(2)
console.log(tree.contains(10));
