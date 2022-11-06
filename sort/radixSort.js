// For lists of numbers.
// Never makes comparisons between two numbers.
// Distributes elements into buckets according to their radix.
// To place numbers in buckets according to their digits and digit placement,
// we need some helper functions.

// HELPER FUNCTIONS

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
    if(num === 0) return 1; // special case because Math.log10(0) is infinity
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
//////////////////////////////////////////////////////////////////////////////////


// Radix Sort PSEUDOCODE
//  Function that accepts a list of numbers.
//  Know how many digits the largest number has.
//  Loop from 0 to largest number digits.
//    For each iteration create buckets for each digit -
//      this could be an array of 10 subarrays, 0-9, -
//     and place each number in correct bucket based on kth digit.

function radixSort(list){
    let maxDigits = mostDigits(list)
    for(let i = 0; i < maxDigits; i++){
        let buckets = Array.from({length: 10}, () => [])  // creates 10 subarrays, indexes 0-9
        for(let num of list){
            buckets[getDigit(num, i)].push(num) //getDigit returns a number // we use that number as index in subarrays of 'buckets' and push the number into that subarray
        }
        list = [].concat(...buckets) //use spread operator to convert from subarrays to one array
        //list = buckets.flat() //also works to flatten subarrays
    }
    return list
}

const list = [7, 3, 0, 956, 35, 22, 99, 666, 22, 1]
console.log(radixSort(list))



// Big O is O(nk)
// n is number of inputs, k is length of digits 
