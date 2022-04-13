//take a string and return alphanumeric character count, lowercawe

function charCount(str){
    //make object to return at the end
    let obj = {}
    str = str.toLowerCase()
    const regEx = /[0-9a-z]/;
    //loop over string
    for(let ch of str){
        if(regEx.test(ch)){
        obj[ch] = (obj[ch] || 0) + 1
        }
    }  
    return obj
}

const phrase = "the Quick brown fox is 112"

console.log(charCount(phrase))