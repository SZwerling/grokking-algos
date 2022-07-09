// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Given a roman numeral, convert it to an integer.
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.


//  @param {string} s
//  @return {number}

//convert to arr of numbers
//if number is larger than following, add and advance one
// else subtract from following and add, advance two
 
 const romanToInt = function(s) {
    const I = 1, V = 5, X = 10; L = 50, C = 100, D = 500, M = 1000
    let total = 0;
    for(let i = 0; i < s.length; i++){

        let current = eval(s[i])
        if(current >= eval(s[i+1]) || !(s[i+1])){
            total += current;
        } else {
            total += (eval(s[i+1]) - eval(s[i]))
            i++
        }
    }
    
    return total
    
};

console.log(romanToInt('MCMXCIV'))

// Instead of using eval, could make an object
// const obj = {
//     I: 1, 
//     V: 5,
//     etc: etc
// }
// access with like this if obj[s[i]] >= obj[s[i+1]]