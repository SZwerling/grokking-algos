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

const arr1 = [0, 50];
const arr2 = [-1, 52, 60];

console.log(merge(arr1, arr2))