// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()[]{}"
// Output: true

//  @param {string} s
//  @return {boolean}

let str = "([[{[[]{}]}]])";

let valid = function () {
    
   let arr = [];
   let obj = {
      "{": "}",
      "(": ")",
      "[": "]",
   };

   for (let i = 0; i < str.length; i++) {
      if (str[i] in obj) {
         arr.push(str[i]);
      } else if (obj[arr.pop()] !== str[i]) {
         return false;
      }
   }

   return arr.length === 0;
};

console.log(valid(str));
