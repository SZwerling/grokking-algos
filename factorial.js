const fact = (x) => {
    if(x === 1){
        console.log(x)
        return 1
    } else {
        console.log(x)
        return x * fact(x-1)
    }
}

console.log(fact(4))