function fib1(n){ 
    let i = 2
    let arr = [0, 1];
    while(arr.length <= n){
        arr[i] = arr[i-1] + arr[i-2]
        i++
       // console.log(arr)
    }
    return arr[n]
}
console.log(fib1(10))
// 0, 1, 1, 2, 3, 5, 8, 13
// same thing w for loop
fip = (num) => {
    let result = [0, 1];
    for(let i = 2; i <=num; i++){
        const a = result[i-1];
        const b = result[i-2];

        result.push(a+b)
    }
    return result[num]
}

//console.log(fip(4))

//recursive, runtime is expoenential n^2
function fin(n) {
    if(n < 2){
       // console.log(n) //can see all the base cases less than 2, 0 and 1, all the 1's add up to correct result
        return n;
    }
    
    return fin(n-1) + fin(n-2);
} 

//console.log(fin(6))

function memoize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const results = fn.apply(this, args);
        cache[args] = results;
        return results;
    };
}

function slowFib(n) {
    if(n < 2){
        return n;
    }
    
    return fib(n-1) + fib(n-2);
} 

const fib = memoize(slowFib)
//console.log(fib(10))
