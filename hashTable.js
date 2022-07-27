

// problems: loop means it's not constant time, output numbers tend to cluster up too much.
const hash = function(key, arrLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0) - 96 // maps a to 1, b to 2 // A is -31, B -30
        total = (total + value) % arrLen
    }
    return total;
}

console.log("B".charCodeAt() - 96)