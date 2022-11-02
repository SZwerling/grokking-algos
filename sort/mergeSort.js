// BIG O 
// O(n log n)
// log n in the destructing or decomposition part 8 items 2 to the 3rd power gives us 8
// O(n) in the comparing to order them part
// put it together and it's O(n log n)
// space complexity is O(n) // larger array means using more space

const arr3 = [1, 2, 3, 4, 0, 50, 9, -1, 52, 60, 8, 7, 6]

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }

    const center = Math.floor(arr.length / 2);
    //could also put recursive call here
    //e.g. const left = mergeSort(arr.slice(0, center))
    //which gives us multple singe-item arrays
    //then merger(left, right)
    const left = arr.slice(0, center);  //up to but not including center
    const right = arr.slice(center)
    console.log(left, right)
    return merger(mergeSort(left), mergeSort(right));  //recursive function to mergeSort that splits into multiple single-item arrays
}                                                     //and those are sent into  merge
console.log(mergeSort(arr3))


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
// console.log(merger(num1, num2))




