function productOfArr(arr){
    if(arr.length === 1) return arr[0]
    return arr[0] * dowa(arr.splice(1))
}

const array = [1, 2, 3, 4, 5, 6]

console.log(dowa(numArr))