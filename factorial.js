const fact = (x) => {
    if(x === 1){
        return 1
    } else {
        return x * fact(x-1)
    }
}

console.log(fact(4))


function factorial(x){
    if(x===1){
        return 1;
    } else {
        return x * factorial(x-1)
    }
}

console.log(factorial(.5))


const facto = function (num) {
    if(num === 0) return 1;
    if(num === 1) return num;
    return num * facto(num - 1)
}
