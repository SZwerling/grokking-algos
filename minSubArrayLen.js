
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
		// we can shrink the window 
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



//([2, 3, 1, 2, 4, 3], 7)  output 2, because [4, 3] is smallest subarray that is greater or equal to num input
//[2, 1, 6, 5, 4], 9  output is 
//start with 1, if too small, increase window to right
//if too small, decrease window on the left
//if equal or greater, move entire window right and repeat
