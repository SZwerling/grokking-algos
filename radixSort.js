// For lists of numbers.
// Never makes comparisons between two numbers.
// Distributes elements into buckets according to their radix.
//To place numbers in buckets according to their digits and digit placement,
//we need some helper functions.

// getDigit(num, place) -- returns digit in num at given place value
// getDigit(12345, 0); returns 5
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// Example:
// 7323 at the 2 position (100s position)
// Math.pow is giving us 10 to the 2 -- 100
// absolute value (so non negative) of 7323 divided by 100
// 73.23  and then Math.floor gives us 73
// divide by ten and remainder is 3
/////////////////////////////////////////////////////////////////////////////////
// We need to know number of digits in largest number.
// digitCount(656) returns 3
// Math.log10(num) -- 10 to what power gives us the number?
// Then we floor it and add one.
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
/////////////////////////////////////////////////////////////////////////////////
// Use digitCount to go through list.
// Return largest number's number of digits.

function mostDigits(list){
    let maxDigits = 0;
    for(let num of list){
        maxDigits = Math.max(maxDigits, digitCount(num))
    }
    return maxDigits
}
