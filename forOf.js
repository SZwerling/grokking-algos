function squaredArr(arr1, arr2) {
   if (arr1.length !== arr2.length) return false;

   let obj1 = {};  //initialize empty objects
   let obj2 = {};

   arr1.forEach((i) => {            //frequency table for each array
      obj1[i] = (obj1[i] || 0) + 1; //if no obj2[i] it is added with value 1
                                    //if already exists, value added 1
   });

   //could also use for..let..of
//    for(let i of arr1){
//        ofj1[i] = (obj1[i] || 0) + 1;
//    }

   arr2.forEach((i) => {  
      obj2[i] = (obj2[i] || 0) + 1; 
   });

   


   for (let key in obj1) {   //iterates over the keys in obj1
      if(!obj2[key ** 2]) return false //checks that each key has a corresponding key sqaured in other obj.
      if (obj2[key ** 2] !== obj1[key]) return false; //that the corresponding key squared has the same value/frequency
   }

   return true;
}

arr1 = [1, 2, 3, 4, 4];
arr2 = [1, 4, 9, 16, 16];

console.log(squaredArr(arr1, arr2))

const obj3 = {
    2: 3,
    1: 3
}



function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;

    const obj1 = {}
    const obj2 = {}

    for(let i of str1){
        obj1[i] = (obj1[i] || 0) + 1;
    }
    console.log(obj1)
    

    for(let i of str2){
        obj2[i] = (obj2[i] || 0) + 1;
    }

    console.log(obj2)

    for(let key in obj1){
        if(!obj2[key]) return false;
        if(obj2[key] !== obj1[key]) return false
    }
    return true;
}

let ann1 = 'iceman';
let ann2 = 'cinema'

console.log(validAnagram(ann1, ann2))


