// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

//    @param {number[]} nums
//    @param {number} target
//    @return {number}

// binary search ?

var searchInsert = function (nums, target) {
   if (target < nums[0]) return 0;
   if (target > nums[nums.length - 1]) return nums.length;
   let endIndex = nums.length - 1;
   let startIndex = 0;
   let middle;
   while (startIndex < endIndex) {
    // if(middle === Math.floor((startIndex + endIndex / 2))){
    //     return middle;
    //   }
      middle = Math.floor((startIndex + endIndex) / 2);
      console.log(`start: ${startIndex}, middle: ${middle}, end: ${endIndex}`)
      
      if (nums[middle] === target) return middle;
      if (nums[middle] > target) end = middle -1;
     
      if (nums[middle] < target) start = middle + 1;
   }
   return middle;
};

let arr = [1, 3, 5, 6]
console.log(searchInsert(arr, 5));



//Output: 1
