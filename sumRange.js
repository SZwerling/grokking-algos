// sum of a range of numbers using recursion


const sumRange = function (num) {
    if(num === 1) return 1;
    return num + sumRange(num -1);
}

console.log(sumRange(3))

const factorial = function (num) {
    if (num===1) return 1;
    return num * factorial(num-1)
}

console.log(factorial(4))