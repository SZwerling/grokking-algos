// PSEUDOCODE
// start w the second element in the arr
// compare to first one and swap if necessary
// continue to next element
// if it is not in correct possition, iterate through sorted portion to place it
// rinse and repeat
// big O, worst case is O(n**2)
// but can work well where data is already sorted and new data is coming in
// It's kind of like we move folders to the right making space to insert one folder in new spot

// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let currentVal = arr[i];
//         let j;
//         for(j = i - 1; j >=0 && arr[j] > currentVal; j--){
//             arr[j+1] = arr[j]  //as long as loop is true, we move current value to right in arr
//             console.log(arr)
//         } 
//         arr[j+1] = currentVal //insert current value
//         //in line above j is being reference outside of it's for loop
//         //that's why I declared it before the loop, so we could access it after
//     }
//     return arr
// }
// const numz = [1, -1, 3, -2, 5, 0]
// currentVal = -1
// j=i-1, arr[j] is 1
// arr[1] = arr[0] 
// console.log(insertionSort(numz))

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        let j;
        for(j = i - 1; j >=0; j--){ 
            if(arr[j] > currentVal){
                arr[j+1] = arr[j] //move value to the right
            } else {
                break
            }
        }
        console.log(j)
        arr[j+1] = currentVal //BECAUSE j DECREMENTS BEFORE LOOP REPEATS
    }
        return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))



