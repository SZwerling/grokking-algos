// pseudo code
// function that accepts an array and a value
// loop through arr and check if current arr element equals the value
// if true return index
// if false return -1

const linearSearch = function (arr, value) {
    let index = 0
    for(let element of arr){
        if(element === value){
            return index;
        } 
        index++
    }
    return -1
}

const linearSearch2 = function (arr, value) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value) return i
    }
    return -1
}

const linearSearch3 = function (arr, value) {
    let answer = -1;
    arr.forEach(function(item, index){
        if(item === value){
            answer = index;
        }
    })
    return answer
}

const list = [1, 5, 6, 3, 9]

console.log(linearSearch(list, 5))
console.log(linearSearch2(list, 5))
console.log(linearSearch3(list, 5))