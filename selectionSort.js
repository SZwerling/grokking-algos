//selection sort without making a separate array
//  O(n*n)  or big O(n squared)

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number
        let min = i;
        
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min !== i) {
             //console.log(min)
             // making a swap, i is at 0 the first time here
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

arr1 = [5, 3, 0, 2]
selectionSort(arr1)
console.log(arr1)
