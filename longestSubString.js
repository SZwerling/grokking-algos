//function which accepts a string and returns the
//length of the longest substring with all distinct (unique) characters


const longString = 'abbcdeef'
const longestSubString = function (str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {  
      let char = str[i]; //c
      if (seen[char]) {
        start = Math.max(start, seen[char]); 
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1); 
      // store the index of the next char so as to not double count
      seen[char] = i + 1; //keep track of index plus one of char // I think it's plus one because index starts at zero
    }
    return longest;
}

seen = {
  a : 1,
  b: 3,
  c: 4
}
console.log(longestSubString(longString))

