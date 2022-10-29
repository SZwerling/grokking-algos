const arr = [1, 5, 7, 2, 9]
const wordArr = ['one', 'buzz', 'it', 'a', 'zebra']

function ascending(a, b){
    return a - b // if negative return -1, positive return 1, equal return 0
}                // negative means a comes first

function descending(a, b){
    return b- a
}

function length(a, b){
    return a.length - b.length
}

console.log(arr.sort(ascending))
console.log(arr.sort(descending))
console.log(wordArr.sort(length))