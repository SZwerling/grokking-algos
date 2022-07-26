// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// var duplicateZeros = function(arr) {
//    for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 0){
//         arr.splice(i, 0, 0)
//         arr.pop()
//         i++
//     }
//    }
//    return arr;
// };



// const nums = [1, 2, 0, 3, 0, 5, 5, 0]
// console.log(duplicateZeros(nums))

const dups = (arr) => {
    let possDups = 0;
    for(let num of arr){
        if(num === 0){
            possDups++
        }
    }
    let end = arr.length - 1
    let left = arr.length - 1 - possDups
    while(left >= 0){
        if(arr[left] === 0){
            arr[end] = 0;
            end--;
            arr[end] = 0;
        } else {
            arr[end] = arr[left]
        }
        end--
        left--
    }
    return arr
}

const arr = [1, 2, 0, 0, 0, 5]
             1  2  0  0  0  0
console.log(dups(arr))

