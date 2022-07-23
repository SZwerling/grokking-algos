class MaxBinaryHeap {
   constructor() {
      this.values = [41, 39, 33, 18, 27, 12]; // prefilling to save time.
   }
   insert(val) {
      this.values.push(val);
      if (this.values.length === 1) {
         return this;
      } else {
         let index = this.values.length - 1;
         let parentIndex = Math.floor((index - 1) / 2);
         while (this.values[index] > this.values[parentIndex]) {
            let temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
         }
      }
      return this;
   }
   extract(){
      const max = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
         this.values[0] = end;
         this.sinkDown();
      }
      
      return max
   }
   sinkDown(){
      let index = 0;
      // const length = this.values.length;
      const element = this.values[0]
      while(true){
         let leftChildIdx = index * 2 + 1
         let rightChildIdx = index * 2 + 2
         let leftChild, rightChild;
         let swap = null;
         if(this.values[leftChildIdx]){
            leftChild = this.values[leftChildIdx]
            if(leftChild > element){
               swap = leftChildIdx;
            }
         }
         if(this.values[rightChildIdx]){
            rightChild = this.values[rightChildIdx]
            if(
               (swap === null && rightChild > element) ||
               (swap && rightChild > leftChild)
            ){
               swap = rightChildIdx;
            }
         }

         if(swap === null) break;
         this.values[index] = this.values[swap];
         this.values[swap] = element;
         index = swap;
      }

   }
}

// Adding to a max binary heap:
// Add to the end and then bubble it up to correct position.
// Bubble up means you compare it to it's parent, if larger than parent, swap values.

// Remove or extract // remove root
// Swap first value in array with last value
// Pop from values array to return
// Have new root -- which is not in correct spot -- sink down.
// Find children, swap with whichever is greater -- if there is one greater.
// Child swapped to now becomes new parent index.
// Keep swapping until neither child is greater than parent or no children.

// const heap = new MaxBinaryHeap();
// heap.insert(55)
// heap.insert(1)
// heap.insert(45)

class PriorityQueue {
   constructor(){
       this.values = [];
   }
   enqueue(val, priority){
       let newNode = new Node(val, priority);
       this.values.push(newNode);
       this.bubbleUp();
   }
   bubbleUp(){
       let idx = this.values.length - 1;
       const element = this.values[idx];
       while(idx > 0){
           let parentIdx = Math.floor((idx - 1)/2);
           let parent = this.values[parentIdx];
           if(element.priority >= parent.priority) break;
           this.values[parentIdx] = element;
           this.values[idx] = parent;
           idx = parentIdx;
       }
   }
   dequeue(){
       const min = this.values[0];
       const end = this.values.pop();
       if(this.values.length > 0){
           this.values[0] = end;
           this.sinkDown();
       }
       return min;
   }
   sinkDown(){
       let idx = 0;
       const length = this.values.length;
       const element = this.values[0];
       while(true){
           let leftChildIdx = 2 * idx + 1;
           let rightChildIdx = 2 * idx + 2;
           let leftChild,rightChild;
           let swap = null;

           if(leftChildIdx < length){
               leftChild = this.values[leftChildIdx];
               if(leftChild.priority < element.priority) {
                   swap = leftChildIdx;
               }
           }
           if(rightChildIdx < length){
               rightChild = this.values[rightChildIdx];
               if(
                   (swap === null && rightChild.priority < element.priority) || 
                   (swap !== null && rightChild.priority < leftChild.priority)
               ) {
                  swap = rightChildIdx;
               }
           }
           if(swap === null) break;
           this.values[idx] = this.values[swap];
           this.values[swap] = element;
           idx = swap;
       }
   }
}

class Node {
   constructor(val, priority){
       this.val = val;
       this.priority = priority;
   }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)

