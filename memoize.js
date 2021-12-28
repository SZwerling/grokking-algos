const add = (n) => (n + 10);
console.log(add(9))

const memoizeAdd = () => {
    let cache = {};
    return (n) => {
        if(n in cache){
            console.log('Fetching from cache.');
            return cache[n];
        } else {
            console.log('Calculating result.');
            let result = n + 10;
            cache[n] = result;
            return result
        }
    }
}

// memoizedAdd returns a function which is invoked later. 
// This is possible because in JavaScript, functions are first class objects which lets us use them as higher order functions and return another function.
// cache can remember its values since the returned function has a closure over it.
// It’s essential that the memoized function is pure. A pure function will return the same output for a particular input no mater how many times it’s called, which makes the cache work as expected.

const newAdd = memoizeAdd();
console.log(newAdd(3))
console.log(newAdd(2))
console.log(newAdd(6))
console.log(newAdd(2))
console.log(newAdd(5))
console.log(newAdd(9))
console.log(newAdd(6))
console.log(newAdd(2))