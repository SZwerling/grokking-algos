//function that takes an arr (does not have to be ordered)
//and a number n and returns maximum sum of n consecutive elements in array
//using sliding window.
//In this case the window is n elements wide and just moves left to right
//This avoids a nested loop

//This is O(n), linear time
function maxSubarraySum(arr, num) {
   if (arr.length < num) return null;
   let tempSum = 0;
   let maxSum = 0;
   for (let i = 0; i < num; i++) {
      tempSum += arr[i];
   }
   
   maxSum = tempSum;
   for (let j = num; j < arr.length; j++) {
      tempSum = tempSum + arr[j] - arr[j-num];
      maxSum = Math.max(maxSum, tempSum);
   }
   return maxSum;
}


const arr1 = [1, 4, 2, 10, -1]
console.log(maxSubarraySum(arr1, 3)); //output 16

// //Here is the nested loop approach. O(n2)
// function nestedLoop(arr, num) {
//    let sum = 0;
//    let max = 0;
//    if (arr.length < num) return null;
//    for (let i = 0; i < arr.length - num + 1; i++) {
//       sum = 0;
//       for (let j = 0; j < num; j++) {
//          sum += arr[i + j];
//          if (sum > max) {
//             max = sum;
//          }
//       }
//    }
//    return max;
// }
// console.log(nestedLoop([1, 4, 2, 10, -1], 3)); //output 16


function max (nums, num) {
   if(nums.length < num) return null;
   let temp = 0;
   for(let i = 0; i < num; i++)
   {
   temp += nums[i]
   }

   let max = temp
   for(let j = num; j < nums.length; j++)
   {
   temp = temp + nums[j] - nums[j-num]
   max = Math.max(temp, max)
   }
   return max
}

console.log(max(arr1, 3))