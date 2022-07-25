// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    let magObj = {}
    for(let char of magazine){
        magObj[char] = (magObj[char] || 0) + 1 
    }

    for(let char of ransomNote){
        if(!magObj[char]) return false;
        magObj[char]--
    }
    return true
    
};