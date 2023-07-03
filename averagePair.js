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
      } else if (tempAvg > avg) {
         right--;
      }
   }
   return false //if it doesn't return true above, then it's false
}


console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([1, 2, 3], 3))

