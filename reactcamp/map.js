const arr1 = [5, 21, 8, 100];

const arr2 = []

const arr3 = []



arr1.forEach(n => {
    arr2.push(n * 2)
})

//or

arr1.forEach((n, i) => {
    arr3[i] = arr1[i] * 2
})

//or

const arr4 = arr1.map(n => n * 2);



console.log(arr2)
console.log(arr3)
console.log(arr4)