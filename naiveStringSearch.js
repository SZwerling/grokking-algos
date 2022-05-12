// PSEUDOCODE
// function takes two strings to see if first string is included in second string
// loop over the longer string
// loop over the shorter string
// if char don't match, break out of inner loop
// if char's match, keep going
// if complete inner loop and find match, increment count of matches and keep going
// return count

const naiveStringSeach = function (long, short) {
   let count = 0;

   for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
         if (short[j] !== long[i + j]) {  // this is the clever part
            break;
         }
         
         if (j === short.length - 1) {
            count++;
         }
      }
   }

   return count;
};

const word1 = "ha"; //j
const word2 = "have a happy"; //i
console.log(naiveStringSeach(word2, word1));
