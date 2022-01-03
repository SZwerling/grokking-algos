//find max sum of num consecutive numbers in an array.
//naive approach O(n^2) 
function maxSubArray(arr, num){
    if(num > arr.length){
        return null;
    }
    let max = -Infinity
    
    for(let i=0; i<arr.length - num + 1; i++){
        temp=0;
        for(j=0; j<num; j++){
            temp += arr[i + j]
        }
        if(temp > max){
            max = temp;
        }

    }
    return max;
}

let arr1  = [1, 1, 2]
let num = 2

console.log(maxSubArray(arr1, num))

//moving window algo
// O(n)
function maxSubArray2(arr, num){
    if(num > arr.length){
        return null
    }
    let tempSum = 0;
    let maxSum = 0;
    for(let i = 0; i<num; i++){
        maxSum += arr[i];           //2
    }
    tempSum = maxSum; //temp sum now 2
    for(let j=num; j<arr.length; j++){ //j is 2 while less than 3
        tempSum = tempSum - arr[j - num] + arr[j];  //subtracts 1st number and adds next number in arr to total
        maxSum = Math.max(maxSum, tempSum);         //in this way it moves the 'window' forward.
    }                                              
    return maxSum
}

console.log(maxSubArray2(arr1, num))
