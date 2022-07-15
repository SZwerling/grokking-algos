// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

//    @param {number[]} nums
//    @param {number} target
//    @return {number}

// binary search ?

var searchInsert = function (nums, target) {
   if(target > nums[nums.length-1]){
      return nums.length;
   }
   if(target < nums[nums.length[0]]){
      return 0;
   }
   let start = 0;
   let end = nums.length -1 ;
   let middle;
   while (start < end) {
      middle = Math.floor((start + end) / 2);
     
      
      if(nums[middle] === target) return middle;
      if(nums[middle] < target){ 
         start = middle + 1;
      } 
      if(nums[middle] > target){
         end = middle;
   }
}
return start;
 };

let arr = [1, 3, 5, 6, 8, 9] ;
console.log(searchInsert(arr, 4));


