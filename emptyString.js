const john = ''  //empty string is considered falsy

if(!john){
    console.log('John is empty')
} else if(john){
    console.log('John is still empty')
}

console.log(typeof john)