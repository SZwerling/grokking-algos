//takes two strings and checks whether the characters in the first string
//form a subsequence of characters in the second string
//order matters
//isSubsequence('sing', 'string') //output 'true'


function isSubsequence(str1, str2) { 
    let count = 0;
    for(let val of str2){
        if(str1[count] === val){
            count ++
        }
    }
    return str1.length === count;
}
  console.log(isSubsequence('sing', 'santa fe never good'))

////////////////////////////////////////////

  function isSubsequence2 (string1, string2) {
    let right = 0
    let left = 0
    while(right < string2.length){
        if(string1[left] === string2[right]){
            left++
            right++
        }
        right++
    }
    if(left === string1.length){
        return true
    }
    return false
  }

  console.log(isSubsequence2('sing', 'santa is fe never good'))