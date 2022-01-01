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




let  arr = [0, 0, 0, 1, 1, 34]
console.log(countUniqueValues(arr))

function countUniqueValues2(arr){
    let i = 0;                                         
    for(j=1; j<arr.length; j++){               
        if(arr[i] !== arr[j]){              
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}

console.log(countUniqueValues2(arr))