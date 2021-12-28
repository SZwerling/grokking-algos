//write a function that returns the number of vowels used in a string
//vowels('hi there') --> 3

function vowels(str){
    let stri = str.toLowerCase()
    let total = 0;
    for(let i = 0; i < stri.length; i++){
        if(stri[i] === 'a' || stri[i] === 'e' || stri[i] === 'i' || stri[i] === 'o' || stri[i] === 'u'){
            total = total + 1
        }
    }
    return total
}

console.log(vowels('HI there!!'))

function vowels2(str){
    let counter = 0;
    let checker = "aeiou"  //using an array might be clearer ['a', 'e', etc.]
    for(let char of str.toLowerCase()){
        if(checker.includes(char)){
            counter ++
        }
    }
    return counter
}

console.log(vowels2('Get out of BED!!'))

//using regEx

function vowels3(str){
    let matches = str.match(/[aeiou]/gi);  //returns an array of all matches
    return matches ? matches.length : 0    //empty array is null, so if false return 0
}

console.log(vowels3('pot'))
