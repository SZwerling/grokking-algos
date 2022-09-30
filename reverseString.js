
function reverseString(str){
    return str.split('').reduce((reversed, letter) => letter + reversed);
}

console.log(reverseString('reduce'))

//or

function reverseString2(str){
    return str.split('').reverse().join('');
}

console.log(reverseString2('hello'))

//or

function reverseString3(str){
    let reversed = ''
    for(const letter of str){
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

//instead of split use spread syntax
function reverseString4(str){
    return [...str].reverse().join('')
}

console.log(reverseString4('4zwerling'))



// can supply initial value with reduce as second argt. reduce((a, b) => a + b, c)
function reduceWithNumbers(numArr) {
   return numArr.reduce((a, b) => a + b, 20)
}

console.log(reduceWithNumbers([1, 2, 3, 4]))


