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
const sym = function(){
    let args = [...arguments];

    const symDiff = function(arr1, arr2){
        let result = []
        arr1.forEach((item) => {
            if(arr1.indexOf(item) < 0 && arr2.indexOf(item) < 0) {
                result.push(item)
            }
        });

        arr2.forEach((item) => {
            if(arr2.indexOf(item) < 0 && arr1.indexOf(item) < 0){
                result.push(item)
            }
        });
        return result
    }

    return args.reduce(symDiff)
    
}

console.log(sym(a, b, c))

