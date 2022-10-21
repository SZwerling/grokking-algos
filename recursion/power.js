//function which takes a base and exponent
//returns power of base to exponent
//using recursion

function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    return base * (power(base, exponent-1))
}

console.log(power(2, 4))

