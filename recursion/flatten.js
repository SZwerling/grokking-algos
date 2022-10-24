
// Write a recursive function called flatten which accepts an array of arrays 
// and returns a new array with all values flattened.

function flatten(oldArr){
    let newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){  //Array.isArray() returns true if argument is an array
                newArr = newArr.concat(flatten(oldArr[i])) //if it is subarray, send it back through and concat that result to newArr
          } else {
                newArr.push(oldArr[i]) // not subarray, push onto result
          }
    } 
    return newArr;
  }

[1, 2, 3, 4, 5]
  
  const array = [1, 2, 3, [4, 5]]

  console.log(flatten(array))

  
