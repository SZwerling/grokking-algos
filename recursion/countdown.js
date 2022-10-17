

function countdown(num) {
    if(num <= 0){
        console.log('All accounted for!')
        return
    } 
    console.log(num)
    countdown(--num) //-- first means it happens before function called
}

countdown(10)