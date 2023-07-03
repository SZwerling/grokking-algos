//function that accepts a sorted array and
//counts the unique values in the array

function countUniqueValues(arr){
    let left = 0
    let right = 1
    let holder = []//to hold unique values
    while(right <= arr.length){
        if(arr[left] === arr[right]){
            arr.splice(right-1, 1) 

        }
        if(arr[left] !== arr[right]){
            holder.push(arr[left])
            right++;
            left++;
        }
       
    }
    return holder.length
}




let  arr = [-1, -1, 0, 3, 4, 5, 5, 5, 6, 9]
console.log(countUniqueValues(arr))

function countUniqueValues2(arr){
    if(arr.length<1) return 0
    let i = 0;                                         
    for(let j=1; j<arr.length; j++){             
        if(arr[i] !== arr[j]){              
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}



console.log(countUniqueValues2(arr))