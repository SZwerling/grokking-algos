//given a sorted array of integers and a target average, determine if there is
//a pair of values in the array where the average of the pair equals the target average.
//There may be more than one pair that matches the target average.
// averagePair([1, 2, 3], 2.5)  //output true
//using pointers

function averagePair(arr, avg) {
   if (arr.length === 0) {
      return false;
   }
   let left = 0;
   let right = arr.length - 1;
   while (left < right) {
      let tempAvg = (arr[left] + arr[right]) / 2;
      if (tempAvg === avg) {
         return true;
      } else if (tempAvg < avg) {
         left++;
      } else if (tempAve > avg) {
         right++;
      }
   }
   return false //if it doesn't return true above, then it's false
}

console.log(averagePair([1, 2, 3], 2.5));

function averagePair2(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
