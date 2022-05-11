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

const list = [1, 2, 3, 4, 5, 6]

console.log(linearSearch(list, 5))