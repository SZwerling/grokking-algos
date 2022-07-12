// A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.
// For example, a string such as "substitution" could be abbreviated as (but not limited to):
// "s10n" ("s ubstitutio n")
// "sub4u4" ("sub stit u tion")
// "12" ("substitution")
// "su3i1u2on" ("su bst i t u ti on")
// "substitution" (no substrings replaced)

// Input: word = "internationalization", abbr = "i12iz4n"
// Output: true
// Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").

// @param {string} word
// @param {string} abbr
// @return {boolean}

const validWordAbbreviation = (word, abbr) => {
    if (word == null || abbr == null) return false;
  
    let i = 0;
    let j = 0;
    while ( i < word.length && j < abbr.length) {
      if (isNum(abbr[j])) {
        if (abbr[j] === '0') return false;
        let n = 0;
        while (j < abbr.length && isNum(abbr[j])) {
          n = n * 10 + Number(abbr[j]);
          j++;
        }
        i += n;
      } else {
        if (word[i] !== abbr[j]) return false;
        i++;
        j++;
      }
    }
    return i === word.length && j === abbr.length;
  };
  
// const isNum = c => /\d/.test(c);
const isNum = (c) => {
    return "0123456789".includes(c)
}


console.log(validWordAbbreviation("abbreviation", "a10n"));


