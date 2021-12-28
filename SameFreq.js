

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

console.log(sameFrequency(00001, 00001))