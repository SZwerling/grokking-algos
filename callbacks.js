const getInfo = function(callback){ //takes callback as an argument, but callback is defined elsewhere
    console.log('first')
    setTimeout(() => callback(`data`), 3000)

}

getInfo((info) => { // we define this anonymous callback to send into getInfo as we call it
    console.log(info)
})

