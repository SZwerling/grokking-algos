// pseudo code
// function that accepts an array and a value
// loop through arr and check if current arr element equals the value
// if true return index
// if false return -1
// forEach IS NOT GREAT FOR THIS BECAUSE RETURN WON'T STOP LOOP

const linearSearch = function (arr, value) {
   let index = 0;
   for (let element of arr) {
      if (element === value) {
         return index;
      }
      index++;
   }
   return -1;
};

const linearSearch2 = function (arr, value) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
   }
   return -1;
};



const list = [1, 5, 6, 3, 9];
const list2 = ["Sam", "Beth", "Ralph", "Susan", "John"];

const linearSearch4 = function (arr, value) {
   for (let [ind, el] of arr.entries()) {
      if (el === value) {
         return ind;
      }
   }
   return -1;
};

//console.log(linearSearch4(list, 10))

// console.log(linearSearch(list, 5))
// console.log(linearSearch2(list, 5))

