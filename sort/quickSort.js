// PSEUDOCODE
// Pivot Helper : Designates an element as a pivot
//                and arranges elements on either side of that pivot
//                based on less than or greater than the value of the pivot element.
//                It does not make a new array. And it returns index of pivot.
// BIG O
//  Average:
//  O(n log n) // similar to merge sort
//  the decomposition is the log n, and the comparing is the n
//  Worst case: O(n**2)


function pivot(arr, start = 0, end = arr.length - 1) {
   let pivotIndx = start;
   for (let i = start + 1; i <= end; i++) {
      if (arr[start] > arr[i]) {
         pivotIndx++; //1
         [arr[pivotIndx], arr[i]] = [arr[i], arr[pivotIndx]];
      }
   }
   [arr[start], arr[pivotIndx]] = [arr[pivotIndx], arr[start]];
   return pivotIndx;
}



// Then we recursively call quickSort on left and right of that pivot.

function quickSort(arr, left=0, right=arr.length-1){
   
    if(left < right){ // base case is when left and right indeces are equal // means subarray is 0 length
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

const nums = [60, 4, 8, 2, 43, 1, 6, 7, 32];
console.log(quickSort(nums))



