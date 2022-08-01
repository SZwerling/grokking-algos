// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
    let result = nums[0]
    for(let i = 1; i < nums.length; i++){
        result = result^nums[i]
    }  
};

// This answer uses the bitwise XOR operator, the carot.
// We checked it out. Difficult to understand. 


const arr = [2, 2, 1, 3, 1, 3, 5, 6, 6]
singleNumber(arr)


                  
