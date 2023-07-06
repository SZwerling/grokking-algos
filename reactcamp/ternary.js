const lightswitch = {
    switchState: "on",
    flipSwitch(){
        this.switchState = "on"? this.switchState="off" : this.switchState = "on"
    }
}

console.log(lightswitch.switchState)
lightswitch.flipSwitch()
console.log(lightswitch.switchState)

//could also just use this IF true to false

const flipper = {
    status: true,
    flipSwitch(){
        this.status = !this.status
    }
}

//if you want to use return, must be at beginning of statement
// flipSwitch(){
//    return this.switchState = "on"? this.switchState="off" : this.switchState = "on"
//    }