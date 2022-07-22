//Why is this not working? Take a look.

// The arguments object is a local variable available within all non-arrow functions. 
// You can refer to a function's arguments inside that function by using its arguments object. 
// It has entries for each argument the function was called with, with the first entry's index at 0.
//can only use .length
//However, it can be converted to a real Array:
    //let args = [...arguments];
    //let args = Array.prototype.slice.call(arguments);
    //let args = Array.from(arguments);
    //var args = [].slice.call(arguments);


const a = [1, 2, 3]
const b = [3, 5, 6]
const c = [7, 6, 9]


const sym = function(...args){
    
    console.log(args)
    const result = []
    const symDiff = function(a, b){
       if(result.indexOf(a) > 0){
        result.push(a)
       }
       if(result.indexOf(b) > 0){
        result.push(b)
       }
     
      return result;
       
    }

    return args.reduce(symDiff)
    
}

console.log(sym(a, b, c))

