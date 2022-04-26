//function which accepts a string and returns the
//length of the longes substring with all distinct (unique) characters


const longString = 'abbcde'
const longestSubString = function (str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 3; i < str.length; i++) {
      let char = str[i]; //c
      if (seen[char]) {
        start = Math.max(start, seen[char]); // 2
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1); // 2
      // store the index of the next char so as to not double count
      seen[char] = i + 1; // a : 1, b : 3, c : 4
    }
    return longest;
}

seen = {
  a : 1,
  b: 3,
  c: 4
}

