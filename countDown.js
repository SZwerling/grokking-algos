// intro function to recursion

const countdown = function (num) {
    if(num <= 0){
        console.log('All done!');
        return;
    }
    console.log(num);
    num--
    countdown(num)
}

countdown(5.5)