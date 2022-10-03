const phrase = "Hello there, 60 people!"

letter = "!"
const reg = /[A-Za-z0-9]/
let obj = {}
for(let letter of phrase){
    if(reg.test(letter)){
        obj[letter.toLocaleLowerCase()] = (obj[letter.toLocaleLowerCase()] || 0) + 1
    }
}

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
console.log(match[1])