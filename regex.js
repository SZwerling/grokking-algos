const phrase = "Hello there, 60 people!"


const reg = /[A-Za-z0-9]/
let obj = {}
// for(let letter of phrase){
//     letter = letter.toLocaleLowerCase()
//     if(reg.test(letter)){
//         obj[letter] = ++obj[letter] || 1
//     }
// }

// console.log(obj)

const str = "base"
const regEx = /^base$/
const isExisting = regEx.test(str)
// console.log(isExisting)

// ^ means has to start with // $ means has to end with
// + is one or more /my name is [a-z]+/
// * means 0 or more
// ? means character is optional
// /[0-9]{1,3} means any numbers but 1 to 3 characters in length, enforced with ^ then $ eg.  /^[0-9]{1,3}$/

const num = 123
const regg = /^[0-9]{1,3}$/
// console.log(regg.test(num))


// we can group and return with /name is ([A-Za-z]+)/ 
const intro = 'My name is Humblefoot'
const findName = /name is ([A-Za-z]+)/ 
const match = findName.exec(intro)
// console.log(match[1])

//we can also use charCodeAt
//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//It is a little faster then a regex.
//And we could write helper function.
function isAlphaNumeric(charct){
    let code = charct.charCodeAt(0);  //0 indicating index is optional because only one character
    if(!(code > 47 && code < 58) &&   // 0-9
        !(code > 64 && code < 91) &&  // A-Z
        !(code > 96 && code < 123)){  // a-z
            return false
        }
        return true
}

function charCount(sentence){
    for(let letter of sentence){  
        if(isAlphaNumeric(letter)){
            letter = letter.toLocaleLowerCase()
            obj[letter] = ++obj[letter] || 1
        }
    }
    return obj
}

console.log(charCount(intro))
