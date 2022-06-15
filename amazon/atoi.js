// string to integer // atoi
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.




var myAtoi = function(s) {
    let str = s.trim()
    let arr = []
    let value = 1; //set sign to positive
    for(let el of str){
        arr.push(el)
    }

    //check for sign
    if(arr[0] === '-'){
        value = -1;
        arr.splice(0, 1)
    }
    if(arr[0] === '+'){
        arr.splice(0,1)
    }

    let num = '';
    let i = 0;
    while(arr[i] >= '0' && arr[i] <= '9'){ //when character is not a number, end loop
        num = num + arr[i] //concat character
        i++
    }

    return Number(num) * value  //Number forces to string to number and multiply by sign
};

console.log(myAtoi('  -123f 2'))

// let INT_MAX = Math.pow(2,31) - 1;
// let INT_MIN = -Math.pow(2, 31);
// if ((result > Math.floor(INT_MAX / 10)) || 
// (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {     
// // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.    
// return sign == 1 ? INT_MAX : INT_MIN;
// }