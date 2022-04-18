//function that checks variable number of arguments for duplicates
//areThereDuplicates(1, 2, 3) //false
//areThereDuplicates('a', 'a', 'b', 'c') //true
//arguments is an array-like object available within all non-arrow functions
//...args is the rest parameter. Allows a function to take an indefinite number of arguments as an array.

function areThereDuplicates() {
    console.log(arguments)
    let freq = {}
    for(let val in arguments){ 
        freq[arguments[val]] = (freq[arguments[val]] || 0) + 1
    }
    console.log(freq)
    for(let val in freq) 
        if(freq[val] > 1){
            return true
        }
        return false
    }

    // console.log(areThereDuplicates3(1, 2, 3, 3, 3, 3, 'a'))
  
//some reason with 'arguments' need to plug in freq[arguments[val]]

//solution with multiple pointers
function areThereDuplicates2(...args){
    args.sort();
    console.log(args)
    let start = 0
    let next = 1
    
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start ++
        next ++
    }
    return false
}

console.log(areThereDuplicates2(1, 'c', 2, 'b', 6, 3, 'b'))

//areThereDuplicates One Liner Solution   ????????
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length; 
}
//The size accessor property returns the number of (unique) elements in a Set object.

function areThereDuplicates4(...args) {
    console.log(args)
    let freq = {}
    for(let val of args){ 
        freq[val] = (freq[val] || 0) + 1
    }
    for(let val in freq) 
        if(freq[val] > 1){
            return true
        }
        return false
    }

    // console.log(areThereDuplicates4(1, 1, 3, 4))

  