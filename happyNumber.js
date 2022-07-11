// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

//  @param {number} n
//  @return {boolean}

var isHappy = function (n) {
   let obj = {};
   let sum = 0;
   let arrOfNums = n.toString().split("");
   arrOfNums = arrOfNums.map((num) => parseInt(num));
   while (true) {
      sum = arrOfNums.reduce((a, b) => a + b ** 2, 0);
      if (sum === 1) return true;
      if (sum in obj) {
         return false;
      } else {
         obj[sum] = Math.max(1 || obj[sum] + 1);
      }
      arrOfNums = sum.toString().split("");
      arrOfNums = arrOfNums.map((num) => parseInt(num));
   }
};

console.log(isHappy(2));

// The solution is that if it's not going to get to one, the sums will repeat. So, hash map.
