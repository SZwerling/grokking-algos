//return sorted array
//nested array means it's n squared runtime

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){  //shrink the window on the right every time
        for(let j = 0; j < arr.length - i; j++){  //iterate to move largest number to the right
            if(arr[j] > arr[j+1]){
                let bigTemp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = bigTemp;
            }
        }
    }
    return arr
}

const numz = [ 0, 4, 2, 7, 3, 51]
console.log(bubbleSort(numz))