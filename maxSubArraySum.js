function maxSubarraySum(arr, num) {
    if(arr.length < num){
        return null
    }
   let tempLargest = 0;
   let sum = 0;
   let l = 0;
   for (let i = 0; i < num; i++) {
      sum += arr[i];
   }
   tempLargest = sum;
   for (let j = num; j < arr.length; j++) {
      sum = sum + arr[j] - arr[l];
      if (sum > tempLargest) {
         tempLargest = sum;
      }
      l++;
   }
   return tempLargest;
}

console.log(maxSubarraySum([1, 4, 2, 10, -1], 3)); //output 7
