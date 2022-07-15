
class MaxBinaryHeap {
   constructor() {
      this.values = [41, 39, 33, 18, 27, 12];
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
}

// Adding to a max binary heap:
// Add to the end and then bubble it up to correct position.
// Bubble up means you compare it to it's parent, if larger than parent, swap values.

const heap = new MaxBinaryHeap();
heap.insert(55)
heap.insert(1)
heap.insert(45)
console.log(heap);
