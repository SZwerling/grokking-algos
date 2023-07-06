//computed property names
const myProperty = "foo";
const myObject = {
    [myProperty]: "This is a test, foo"
}

console.log(myObject) //brackets around myProperty allow using variable as prop name

//spread syntax
const landVehicles = ['sedan', 'truck', 'van'];
const waterVehciles = ['canoe', 'sailboat', 'submarine']
const vehicles = [...landVehicles, ...waterVehciles]

const moreVehicles = [...vehicles, "tank"]

const mixMatch = [...moreVehicles, {someObjProp: "someObjPropVal"}]

//now with objects
const objOne = {
    color: "blue",
    height: 12
}
const objTwo ={
    material: "ceramic",
    width: 6
}

//one object with all the prop names and values
const objOneAndTwoCombined = {...objOne, ...objTwo};


const objThree = {color: "red", width: 7};
//color prop from objThree will overwrite color prop in objOne because it came after
const objOneAndThreeCombined = {...objOne, ...objThree};

//can also use spread syntax to update an object's props in a NEW object
const newObjUpdateHeight = {...objThree, height: 500}
console.log(newObjUpdateHeight)

