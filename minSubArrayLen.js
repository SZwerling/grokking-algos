//Function that takes two parameters, an array of positive integers and a positive integer
//and returns the minimal length of a contiguous subarray of which the sum is
//greater than or equal to the positive integer passed to the function.
//If there is not one, return 0.



function minSubArrayLen(nums, sum) {    //[3, 1, 5], 6          //smallest subarray equal to or greater than number 
    let total = 0;    
    let start = 0;
    let end = 0;
    let minLen = Infinity;
                                                                            // 3, 1, 5
    while (start < nums.length) {  
     //increase window to the right
      if(total < sum && end < nums.length){  //
        total += nums[end];  
              end++;
      }
     //decrease window by moving left to right
    else if(total >= sum){
        minLen = Math.min(minLen, end-start); 
              total -= nums[start]; 
              start++; 
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }


const arr = [2, 3, 5, 2, 4, 3];
const num = 14
console.log(minSubArrayLen(arr, num))
//([2, 3, 1, 2, 4, 3], 7)  output 2, because [4, 3] is smallest subarray that is greater or equal to num input
//[2, 1, 6, 5, 4], 9  output is 
//start with 1, if too small, increase window to right
//if too small, decrease window on the left
//if equal or greater, move entire window right and repeat
