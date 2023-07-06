const states =  ["Washington", "Maine", "Montana"];

const mStates = states.filter(state => state[0] === "M")
const MStatesCapital = states.filter(state => state[0] === "M").map(state => state.toUpperCase())

console.log(mStates)
console.log(MStatesCapital)

//if you want to chain custom methods, must have return value
const bird = {
    sing() {
        console.log("The bird sings.")
        return this
    },
    fly() {
        console.log("The bird flaps its wings.")
        return this
    }
}

console.log(bird.sing().fly())