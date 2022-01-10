
const arr1 = [0, 50];
const arr2 = [-1, 52, 60];
const arr3 = [1, 2, 3, 4, 0, 50, 9, -1, 52, 60, 8, 7, 6, 5]

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);  //up to but not including center
    const right = arr.slice(center)
    return merge(mergeSort(left), mergeSort(right));  //recursive function to mergeSort that splits so then only
}                                                     //two elements at a time sent into merge
console.log(mergeSort(arr3))


//
function merge(left, right){
    let results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    return [...results, ...left, ...right]
}


