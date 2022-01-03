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
  console.log(isSubsequence('sin', 'sting'))