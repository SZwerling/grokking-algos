//1, 1, 2, 3, 5, 8, 13 

function fib(num){
    if(num < 2) return num;
    return fib(num - 1) + fib(num -2) 
}


console.log(fib(6))

