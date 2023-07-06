const arr1 = [3, 4, 13, 8, 22];

//reduce returns a single value
//a accumulator, c current value
//accumulator gets updated at each iteration
//when an array of objects, must set initial value

const reducedArr = arr1.reduce((a, c) => a - c)

console.log(reducedArr)

const desserts = [
    { 
       id: 0, 
       type: "cake",
       flavor: "chocolate",
       cost: 4.50
     },
     {
          id: 1,
          type: "pie",
          flavor: "pumpkin",
          cost: 3.75
     },
     {
          id: 2,
          type: "donut",
          flavor: "chocolate",
          cost: 1.50 
     }
];

const desserts2 = desserts.filter(dessert => dessert.flavor === "chocolate")
console.log(desserts2)

const totalCost = desserts.reduce((a, c) => a + c.cost, 0) //starts accumulator at 0, must do with objects
console.log(totalCost)