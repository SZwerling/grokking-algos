//given two positive integers find out if the two numers have the same frequencies of digits

function sameFrequency(num1, num2){
    let arr1 = num1.toString().split('');
    let arr2 = num2.toString().split('');

    if(arr1.length !== arr2.length){
        return false
    };

    let freq1 = {}
    let freq2 = {}

    arr1.forEach((str) => {
        freq1[str] = (freq1[str] || 0) + 1 
    });

    arr2.forEach((str) => {
        freq2[str] = (freq2[str] || 0) + 1
    });

   for(let key in freq1){
       if(!(key in freq2)){
           return false
       };
       if(freq2[key] !== freq1[key]){
           return false;
       }
   }
   return true
}

// console.log(sameFrequency(00001, 00001))

const freq = function(num1, num2){
    let numString1 = num1.toString()
    let numString2 = num2.toString()
    
    let obj1 = {}
    let obj2 = {}
    for(let ch of numString1){
        obj1[ch] = (obj1[ch] || 0) + 1
    }
    for(let ch of numString2){
        obj2[ch] = (obj2[ch] || 0) + 1    
    }
    
    for(let key in obj1){
        if(!obj2[key]) return false
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

console.log(freq(67776, 667))