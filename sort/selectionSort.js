//selection sort without making a separate array
//  O(n*n)  or big O(n squared)
//PSUEDOCODE
//store - as index - first element as smallest value
//compare this item along arr until you find a smaller value
//update min value index with that smaller value
//if needed - then swap to beginning, while beginning moves to the right

//Selection sort is not very good O(n**2)
//Might be better than bubble sort IF for some reason you're
//trying to avoid swapping at each comparison


function selectionSort(inputArr) {
   let n = inputArr.length;

   for (let i = 0; i < n; i++) {
      // Finding the smallest number
      let min = i;

      for (let j = i + 1; j < n; j++) {
         if (inputArr[j] < inputArr[min]) {
            min = j;
         }
      }
      if (min !== i) { //this checks so we only swap if necessary, only if lowest is not already at index i
         // making a swap, i is at 0 the first time here
         [inputArr[i], inputArr[min]] = [inputArr[min], inputArr[i]] //es6 swap syntax
         // let tmp = inputArr[i];
         // inputArr[i] = inputArr[min];
         // inputArr[min] = tmp;
      }
   }
   return inputArr;
}

arr1 = [5, 3, 0, 2];
selectionSort(arr1);
console.log(arr1);

function selectionSort2(arr) {
   for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[indexOfMin]) {
            indexOfMin = j;
         }
      }
      if (indexOfMin != i) {
         let lesser = arr[indexOfMin]; //could also use es6 swap syntax [arr[a], arr[b]] = [arr[b], arr[a]]
         arr[indexOfMin] = arr[i];
         arr[i] = lesser;
      }
   }
   return arr;
}

console.log(selectionSort2(arr1));
