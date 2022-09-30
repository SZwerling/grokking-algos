

// problems: loop means it's not constant time, output numbers tend to cluster up too much.
// const hash = function(key, arrLen){
//     let total = 0;
//     for(let char of key){
//         let value = char.charCodeAt(0) - 96 // maps a to 1, b to 2 // A is -31, B -30
//         total = (total + value) % arrLen
//     }
//     return total;
// }

// console.log("B".charCodeAt() - 96)


// REFACTOR
function hash(key, arrLen){  // if arrLen is prime number, it will decrease number of collisions
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        for(let char of key){
            let value = char.charCodeAt(0) - 96
            total = (total + value + WEIRD_PRIME) % arrLen
        }
    }
    return total
}

console.log(hash('hello', 11))
console.log(hash('bye', 11))
console.log(hash('violet', 11))
console.log(hash('leg warmer', 11))

// DEALING WITH COLLISIONS
// LINEAR PROBING: If index is taken, move up to next available index.
// SEPARATE CHAINING: Store multiple data(key:value) at same index, using sub-arrays or linked lists.