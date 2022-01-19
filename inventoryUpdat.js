// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2){

    const obj = []

for(let el of arr1){
    let key = el[1]
    let value = el[0]
    obj[key] = value
}



arr2.forEach((el) => {
    let key = el[1]
    let value = el[0]
    if(obj[key] === undefined){
        obj[key] = value
    } else {
    obj[key] = obj[key] + value
    }
})

let answer = []

for(let el in obj){
    let arr = []
    arr.push(obj[el])
    arr.push(el)
    answer.push(arr)
}
console.log(answer)

let finalAnswer = answer.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return finalAnswer;

}



console.log(updateInventory(curInv, newInv))

