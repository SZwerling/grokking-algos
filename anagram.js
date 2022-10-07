function validAnagram(word1, word2) {
   if (word1.length !== word2.length) return false;

   let ob1 = {};
   let ob2 = {};

   for (let i of word1) {
      ob1[i] = (ob1[i] || 0) + 1;
   }

   for (let i of word2) {
      ob2[i] = (ob2[i] || 0) + 1;
   }

   for (let i in ob1) {
      if (!ob2[i]) return false;
      if (!(ob1[i] === ob2[i])) return false;
   }
   return true;
}

const wrd1 = "stuff";
const wrd2 = "fluff";
const wrd3 = "ffust"

//console.log(validAnagram(wrd1, wrd2));

//or

function anagram(word1, word2) {
   if (word1.length !== word2.length) return false;

   let ob1 = {};

   for (let i of word1) {
      ob1[i] = (ob1[i] || 0) + 1;
   }
   for (i = 0; i < word2.length; i++) {
      let letter = word2[i];
      if (!ob1[letter]) {
         return false;
      } else {
         ob1[letter] -= 1;
      }
   }
   return true;
}

console.log(anagram(wrd3, wrd2))


//given two strings write a function to determine if the second string
//is an anagram of the first

function isAnagram(one, two){
   if(one.length !== two.length){
      return false
   }

   let obj1 = {}
   let obj2 = {}

   for(let ch of one){
      obj1[ch] = (obj1[ch] || 0) + 1
   }

   for(let ch of two){
      obj2[ch] = (obj2[ch] || 0 + 1)
   }

   for(let key in obj1){
      if(!obj2[key]) return false;
      if(obj1[key !== obj2[key]]) return false;
   }
   return true
}

