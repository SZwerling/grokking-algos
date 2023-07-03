min subArray

function minSubArray(arr, sum){
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;

    while(start < arr.length){
        if(total < sum && end < arr.length){
            total += arr[end];
            end++
        } else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen
}

const arr = [2, 3, 5, 2, 4, 3];
const num = 11
console.log(minSubArray(arr, num))

function squared(n){
    let num = n**2
    return console.log(num)
  }

squared(25)

