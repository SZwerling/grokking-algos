// PSEUDOCODE
// Pivot Helper : Designates an element as a pivot
//                and arranges elements on either side of that pivot
//                based on less than or greater than the value of the pivot element.
//                It does not make a new array. And it returns index of pivot.

// function pivotHelper(arr, start=0, end=arr.length+1){
//     let index = start
//     for(let i = start; i < end; i++){
//         if(arr[start] > arr[i+1]){
//             [arr[start+1], arr[i+1]] = [arr[i+1], arr[start+1]]
//             index ++
//         }
//     }
//     [arr[start], arr[index]] = [arr[index], arr[start]]
//     console.log(arr)
//     return index;
// }   

const nums = [60, 4, 8, 2, 43, 1, 6, 7, 6, 2, 32]

// console.log(pivotHelper(nums))

//COLT STEEL WAY:
function pivot(arr, start=0, end=arr.length+1){
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx ++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
        }
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]
    return swapIdx
}

//console.log(pivot(nums))


// We get index of the pivot.
// Then we recursively call quickSort on left and right of that pivot.

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex-1)
        // right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}


console.log(quickSort(nums))