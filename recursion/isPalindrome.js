// with helper
const isPalindrome = function(str){
    const helper = (word) => {
        if(word.length <= 1){
            return word
        }
        return helper(word.slice(1)) + word[0]
    }

    if(str === helper(str)){
        return true
    } else {
        return false
    }
}
  
console.log(isPalindrome('poop'))

// pure recursion
function isPalindrome2(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

