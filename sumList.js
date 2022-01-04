function sumList(list){
    let len = list.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += list[i]
    }
    return sum
} 

arr = [1, 2]
console.log(sumList(arr))


