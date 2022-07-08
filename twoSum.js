// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// BRUTE FORCE O(N**)
var twoSumBrute = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; i++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};


// Using one-pass hash map
const twoSum = function(nums, target){
    let obj = {}
    for(let index = 0; index < nums.length; index++){
    let complement = target - nums[index];
    if(complement in obj){
        return [obj[complement], index]
    } else {
        obj[nums[index]] = index
    }
  }   
}

const arr = [1, 10, 3, 3]
console.log(twoSum(arr, 6))

