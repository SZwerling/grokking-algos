function reverseString(str){
    return str.split('').reduce((reversed, letter) => letter + reversed, '');
}

console.log(reverseString('hello'))

//or

function reverseString2(str){
    return str.split('').reverse().join('');
}

console.log(reverseString2('hello'))

//or

function reverseString3(str){
    let reversed = ''
    for(const letter of str){
        console.log(reversed)
        reversed = letter + reversed
        //debugger  //node inspect reverseString, 'c' to continue, 'repl' to inspect variables and such
    }
    return reversed
}

console.log(reverseString3('hello'))

//or

function revString(str){
    let reversed = '';
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}


//or

function reverseString4(str){
    return str.split('').reduce((reversed, letter) => {
        return letter + reversed
    }, '')
}

console.log(reverseString3('zwerling'))

