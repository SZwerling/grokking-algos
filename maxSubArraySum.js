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




