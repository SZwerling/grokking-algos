const phrase = "Hello there, 60 people!"

letter = "!"
const reg = /[A-Za-z0-9]/
let obj = {}
for(let letter of phrase){
    if(reg.test(letter)){
        obj[letter.toLocaleLowerCase()] = (obj[letter.toLocaleLowerCase()] || 0) + 1
    }
}

console.log(obj)