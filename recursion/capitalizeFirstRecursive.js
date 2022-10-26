function capitalizeFirst (arr) {
    let result = []
    if(arr.length === 0) return result;
    let word = arr[0]
    result.push(word[0].toUpperCase() + word.slice(1))
    result = result.concat(capitalizeFirst(arr.slice(1)))
    return result
}

const input = ["and", "now", "i", "am", "happy"]
 //console.log(capitalizeFirst(input))

 function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

  console.log(input[0][0].toUpperCase() + input[0].slice(1))
 