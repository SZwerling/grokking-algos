// The arguments object is a local variable available within all non-arrow functions. 
// You can refer to a function's arguments inside that function by using its arguments object. 
// It has entries for each argument the function was called with, with the first entry's index at 0.
//can only use .length


const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [7, 8, 9]
const mam = function(){
    let args = [...arguments]
    console.log(args)
}

console.log(mam(a, b, c))

//However, it can be converted to a real Array:
    //let args = [...arguments];
    //let args = Array.prototype.slice.call(arguments);
    //let args = Array.from(arguments);
    //var args = [].slice.call(arguments);