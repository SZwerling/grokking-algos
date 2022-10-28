// PSEUDOCODE
// function takes two strings to see if first string is included in second string
// loop over the longer string
// loop over the shorter string
// if chars don't match, break out of inner loop
// if chars match, keep going
// if complete inner loop and find match, increment count of matches and keep going
// return count

// const naiveStringSeach = function (long, short) {
//    let count = 0;

//    for (let i = 0; i < long.length; i++) {
//       for (let j = 0; j < short.length; j++) {
//          if (short[j] !== long[i + j]) {  // we add j index to i to move ahead in longer word
//             break;  //if not a match, break, i increments and j starts at 0
//          }
        
//          if (j === short.length - 1) { //this means j got to the end so it was a match
//             count++;
//          }
//       }
//    }

//    return count;
// };

const word1 = "ha"; //j
const word2 = "have a happy hand"; //i


const naiveStringSeach = function (long, short) {
   let count = 0;
   for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
         if (short[j] !== long[i + j]) break;  
         if (j === short.length - 1) count++;
      }
   }
   return count;
};

console.log(naiveStringSeach(word2, word1));