function maxChar(str){
    let freq = {}
    for(let el of str){
        freq[el] = (freq[el] || 0) + 1
    }
    let current = str[0]
    for(let key in freq){
        if(freq[key] > freq[current]){
            current = key
        }
    }
    return current
}

let string1 = 'slappy pop world'

console.log(maxChar(string1))