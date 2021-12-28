function sumList(list){
    let len = list.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += list[i]
    }
    return sum
} 

arr = [1, 2, 3, 4, 5, 6]
console.log(sumList(arr))


function recList(list){
    let sum = 0
    if(arr.length === 0){
        return
    } else {
        sum += list[0]
        list.pop()
    }
}

console.log(recList(arr))