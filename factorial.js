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
