//return sorted array
//nested array means it's n squared runtime
//every pass through the array, the (next) largest number gets moved to the right by swapping places

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){  //shrink the window on the right every time
//         for(let j = 0; j < arr.length - i; j++){  //iterate to move largest number to the right
//             if(arr[j] > arr[j+1]){
//                 let bigTemp = arr[j]  // the swap, important
//                 arr[j] = arr[j+1];
//                 arr[j+1] = bigTemp;
//             }
//         }
//     }
//     return arr
// }

const numz = [6, 5, 7, 8, 1, 0];
// console.log(bubbleSort(numz))

//BUBBLE SORT
//pseudo code
//start looping from the end to the beginning with i
//nested loop from beginning with j to i-1
//compare j and j+1 and swap if needed
//return sorted

const sort = function (arr) {
   for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
         console.log(`Comparing ${arr[j]} and ${arr[j+1]} and the array is ${arr}`);
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
         }
      }
   }
   return arr
};
console.log(sort(numz));

// new 2016 swap
// [arr[j], arr[j+1] = arr[j+1], arr[j]]

