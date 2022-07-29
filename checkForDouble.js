// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

//  @param {number[]} arr
//  @return {boolean}

var checkIfExist = function (arr) {
   let obj = {};

   for (let num of arr) {
     if(obj[num / 2] || obj[num * 2]) return true;
     obj[num] = 1 // or = true
   }
   return false;
};

console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
//console.log(checkIfExist([1, 3, 6]))

