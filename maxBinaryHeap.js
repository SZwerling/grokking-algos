class MaxBinaryHeap{
    constructor(values = []){
        this.values = values;
    }
    insert(val){
        this.values.push(val)
        if(this.values.length === 1){
            return this
        } else {
            let index = this.values.length -1;
            let parentIndex = Math.floor((index -1)/2)
            while(this.values[index] > this.values[parentIndex]){
                let temp = this.values[index]
                this.values[index] =  this.values[parentIndex];
                this.values[parentIndex] = temp;
                index = parentIndex
            }
            }
            return this;
        }
    
}

// Adding to a max binary heap:
// Add to the end and then bubble it up to correct position.
// Bubble up means you compare it to it's parent, if larger than parent, swap values.

const heap = new MaxBinaryHeap()
console.log(heap.insert(12))
console.log(heap.insert(13))
console.log(heap.insert(100))

