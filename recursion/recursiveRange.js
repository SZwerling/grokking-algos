// write a function which accepts a number and adds up all the integers
// from 0 to the number

function recursiveRange(num) {
    if(num === 0) return num;
    return num + recursiveRange(num-1)
}


console.log(recursiveRange(0))