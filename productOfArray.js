// function that takes an array of numbers
// and returns the product of them all

const product = function (arr) {
    return arr.reduce((a, b) => a * b)
}

//recursive

const productRec = function (arr) {
    if(arr.length === 0) return 1;
    return  arr[0] * productRec(arr.slice(1))
}

const numArr = [1, 2, 3, 4, 5]
console.log(product(numArr))
console.log(productRec(numArr))