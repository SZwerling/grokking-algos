function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


const word = "something"

console.log(reverse(word))

// const word = "something"
// let theString = word.split('')
// let reversed = []
// reversed.push(theString[theString.length - 1])
// console.log(theString.pop())
// console.log(theString.join(''))
