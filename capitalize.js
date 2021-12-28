let str1 = "happy days are a here"

function capitalize(str1){

let arr1 = str1.split(" ")

for(let i=0; i<arr1.length; i++){
    arr1[i] = arr1[i].slice(0, 1).toUpperCase() + arr1[i].slice(1);
}
return arr1.join(" ")

}

console.log(capitalize(str1))

function capitalize2(str1){
    let result = str1[0].toUpperCase();

    for(let i=1; i<str1.length; i++){
        if(str1[i-1] === " "){
            result = result + str1[i].toUpperCase()
        } else {
            result = result + str1[i]
        }

    }
    return result
}

console.log(capitalize2(str1))