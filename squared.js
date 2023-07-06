// accepts two arrays
// returns true if every value in first array
// has its value squared in the second array
// frequency must be the same

const arr1 = [1, 2, 4, 5]
const arr2 = [1, 4, 16, 25]

const squareDetector = (a, b) => {
    if(a.length !== b.length) return false;
//   THIS DOES NOT ACCOUNT FOR FREQUENCY
//   NEED CORRECTINDEX = B.INDEXOF(I ** 2) THEN B.SPLICE(CORRECTINDEX, 1)
    for(i of a){
        if(!b.includes(i ** 2)){
            return false
        }
    }
    return true
}

const sDetector = (a, b) => {
    let objA = {}
    let objB = {}
    
    for(let val of a){
        objA[val] = (objA[val] || 0) + 1
    }

    for(let val of b){
        objB[val] = (objB[val] || 0) + 1
    }

    for(let key in objA){
        if(!(key ** 2 in objB)) return false;
        if(objA[key] !== objB[key ** 2]) return false
    }
    return true
}

console.log(squareDetector(arr1, arr2))
console.log(sDetector(arr1, arr2))