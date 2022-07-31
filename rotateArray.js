// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// var rotate = function(nums, k) {
//     let count = 1;
//     while(count <= k){
//         nums.unshift(nums.pop())
//         count++
//     }
//     return nums
// };

var rotate = function(nums, k){
   const len = nums.length
   mod = k % len 
   let end = nums.splice(len - mod)
   console.log(end)
   nums.splice(0, 0,...end)
   return nums
}


// [1,2,3,4,5,6,7]
// 3
// [-1,-100,3,99]
// 2
console.log(rotate([1, 2], 2))
// 7, 6, 5, 4, 3, 2, 1
// 5, 6, 7, 1, 2, 3, 4