//determine if a given string is a palindrome

function palindrom(str){
    let reverse = ''
    for(const letter of str){
        reverse = letter + reverse 
    }
    return reverse === str
}



console.log(palindrom('tot'))

function palindrome(str){
    let left = 0
    let right = str.length -1
    while(left <= right){
        if(str[left] !== str[right]){
            return false
        }
        left ++
        right --
    }
    return true
}
console.log(palindrome('spoops'))