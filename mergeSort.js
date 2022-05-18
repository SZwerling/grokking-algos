
// const arr1 = [0, 50];
// const arr2 = [-1, 52, 60];
// const arr3 = [1, 2, 3, 4, 0, 50, 9, -1, 52, 60, 8, 7, 6, 5]

// function mergeSort(arr){
//     if(arr.length === 1){
//         return arr
//     }

//     const center = Math.floor(arr.length / 2);
//     const left = arr.slice(0, center);  //up to but not including center
//     const right = arr.slice(center)
//     console.log(left, right)
//     return merge(mergeSort(left), mergeSort(right));  //recursive function to mergeSort that splits so then only
// }                                                     //two elements at a time sent into merge
// console.log(mergeSort(arr3))


// //
// function merge(left, right){
//     let results = [];
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             results.push(left.shift())
//         } else {
//             results.push(right.shift())
//         }
//     }
//     return [...results, ...left, ...right]
// }


// MERGING
// function for merging two sorted arrays
// create empty arr
// look at smallest values in each input arr
// While there are still values to check...{
//  if val in first arr is smaller, push value into result arr and move to next val in first arr
//  and vice versa if val in second arr is smaller.


function merger(arr1, arr2){
    let results = []
    while(arr1.length && arr2.length){
        if(arr1[0] <= arr2[0]){
            results.push(arr1.shift())
        } else {
            results.push(arr2.shift())
        }  
    }

    return results.concat(arr1).concat(arr2)
}

const num1 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13]
const num2 = [2, 3, 4, 6, 8, 10, 11]
console.log(merger(num1, num2))
