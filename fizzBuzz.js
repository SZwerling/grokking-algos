// function fizzBuzz(num) {
//    for (let i = 1; i <= num; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//          console.log("fizzbuzz");
//       } else if (i % 3 === 0) {
//          console.log("fizz");
//       } else if (i % 5 === 0) {
//          console.log("buzz");
//       } else {
//          console.log(i);
//       }
//    }
// }

// fizzBuzz(31);

var fizzBuzz = function(n) {
   let i = 1;
   let result = []
   while(i <= n){
       if(i % 3 === 0 && i % 5 === 0){
        result.push("FizzBuzz")
       } else if(i % 3 === 0){
           result.push("Fizz")
       } else if(i % 5 === 0){
           result.push("Buzz")
       } else {
          result.push(i.toString()) 
       }
       i++
   }
   return result;
};

console.log(fizzBuzz(15))
