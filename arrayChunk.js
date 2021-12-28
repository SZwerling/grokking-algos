function chunk(arr, size){
    let chunked = [];
    for(let el of arr){
        const last = chunked[chunked.length-1]; // assignes the name last to te last sub-array in the array
        if(!last || last.length === size){
            chunked.push([el]);
        } else {
            last.push(el) // pushes onto that last sub-array
        }
    }
    return chunked
}



const array1 = [1, 2, 3, 4, 5, 6, 7]
console.log(chunk(array1, 3))

//using slice

function chunk1(arr, size){
    const chunked = [];
    let index = 0;
    while(index < arr.length){
        chunked.push(arr.slice(index, index + size));
        index = index + size
    }
    return chunked
}

console.log