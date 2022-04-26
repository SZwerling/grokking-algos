// This has to do with the connect function in Redux
// The connect function returns a function and then the second parens calls the function

const connect = function (greet) {
    return function (str) {
        console.log(`${greet} ${str}`)
    }
}

connect('Hi')('slim')