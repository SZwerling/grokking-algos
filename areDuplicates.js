//function that checks variable number of arguments for duplicates
//areThereDuplicates(1, 2, 3) //false
//areThereDuplicates('a', 'a', 'b', 'c') //true

function areThereDuplicates() {
    
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

    console.log(areThereDuplicates3(1, 2, 3, 3, 3, 3, 'a'))
  
//some reason with 'arguments' need to plug in freq[arguments[val]]

//solution with multiple pointers
function areThereDuplicates2(...args){
    args.sort((a,b) => a > b);
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

//areThereDuplicates One Liner Solution   ????????
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length; 
}
//The size accessor property returns the number of (unique) elements in a Set object.

  