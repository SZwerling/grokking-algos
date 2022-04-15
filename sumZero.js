//write a function that accepts a sorted array of integers
//and returns first pair where sum is zero or undefined if no pair exists

function sumZero(arr){
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        let sum = arr[i] + arr[j]
        if(sum === 0){
            return [arr[i], arr[j]]
        } else if(sum > 0){
            j--
        } else i++
    }
}

let list = [-5, -3, -2, 0, 1, 4, 6]

console.log(sumZero(list))