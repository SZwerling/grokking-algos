function capitalizeFirst (arr) {
    let result = []
    if(arr.length === 0) return result;
    let word = arr[0]
    result.push(word.charAt(0).toUpperCase() + word.slice(1))
    result = result.concat(capitalizeFirst(arr.slice(1)))
    return result
}

const input = ["and", "now", "i", "am", "happy"]
 console.log(capitalizeFirst(input))