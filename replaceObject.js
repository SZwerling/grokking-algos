let arr1 = [
    {
        id: 0,
        front: 'head',
        back: 'cabeza'
    },
    {
        id: 1,
        front: 'mouth',
        back: 'boca'
    },
    {
        id: 2,
        front: 'face',
        back: 'cara'
    },
]

let obj = {
    id: 1,
    front: 'new',
    back: 'nuevo'
}

let temp = [...arr1]
let ind = temp.findIndex((el) => el.id === 1)
temp[ind] = obj

console.log(arr1)
console.log(temp)
