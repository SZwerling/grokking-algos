//return sorted array
//nested array means it's n squared runtime
//every pass through the array, the (next) largest number gets moved to the right by swapping places

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){  //shrink the window on the right every time
        for(let j = 0; j < arr.length - i; j++){  //iterate to move largest number to the right
            if(arr[j] > arr[j+1]){
                let bigTemp = arr[j]  // the swap, important
                arr[j] = arr[j+1];
                arr[j+1] = bigTemp;
            }
        }
    }
    return arr
}

const numz = [ 0, 4, 2, 7, 3, 51]
console.log(bubbleSort(numz))

//BUBBLE SORT
//pseudo code
//start looping from the end to the beginning with i
//nested loop from beginning with j to i-1
//compare j and j+1 and swap if needed
//return sorted array