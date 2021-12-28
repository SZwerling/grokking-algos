

function isSquare(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(i=0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] * 2) 
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

const arz = [1, 2, 3, 4, 4, 4]
const arz2 = [2, 4, 6, 8, 8, 8]
const arz3 = [1, 2, 3, 4]
const arz4 = [2, 4, 6, 8]
//console.log(isSquare(arz, arz2))

function squareObject(arr1, arr2){
    if(arr1.length !== arr2.length) return false

    const obj1 = {}
    const obj2 = {}

    arr1.forEach((i) => {
        obj1[i] = (obj1[i] || 0) + 1 
    });

    arr2.forEach((i) => {
        obj2[i] = (obj2[i] || 0) + 1
    });
    
    for(let key in obj1){
        //if(!(key * 2 in obj2)) return false;
        if(!obj2[key * 2]) return false;
        if(obj2[key *2] !== obj1[key]) return false;
    }
    return true;
    
}
console.log(squareObject(arz, arz2))
