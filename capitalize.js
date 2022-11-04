// Appears to be O(n) // as n grows the number of steps grows linearly

function capitalize_1(str){
    for(let i = 0; i < arr.length; i++){ //split at spaces to form an array
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1) //mutate each element in the array
    }
    return arr.join(" ") //join with spaces
}

function similar(str){  // same idea as above
    const words = []
    for(let word of str.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(" ")
}



function capitalize_2(str){
    let result = str[0].toUpperCase() //start by concating first letter as capitalized
    for(let i = 1; i < str.length; i++){
        if(str[i-1] === " "){  //if space before current element, capitalize current element
            result += str[i].toUpperCase()
        } else {
            result = result + str[i]
        }
    }
    return result
}


let str2 = "hello there, everyone."
console.log(similar(str2))