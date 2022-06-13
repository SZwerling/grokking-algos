// Given an array of integers 'nums' and an integer 'target,' return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function twoSum(nums, target){
// console.log('hello')
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
// }



//  HASH PSEUDOCODE
//  Loop through arr
//  check if target minus current is in hashmap
//  if yes, return indeces of current and value of complement key in hashmap
//  if no, add current and its index as key/value pair in hashmap

function twoSum(nums, target){
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        let goal = target - nums[i]
        if(goal in hash){
            return [hash[goal], i]
        } 
        hash[nums[i]] = i
    }
}

let example = [2, 7, 11, 15]
console.log(twoSum(example, 9))