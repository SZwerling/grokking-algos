function maxChar(str){
    let freq = {}
    for(let el of str){
        freq[el] = (freq[el] || 0) + 1
    }
    console.log(freq)
    let current = str[0]
    for(let key in freq){
        if(freq[key] > freq[current]){
            current = key
        }
    }
    return current
}

let string1 = 'hello world'

console.log(maxChar(string1))