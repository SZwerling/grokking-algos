function collectOdds(arr){
    let result = []

    function helper(helperInput){

        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(collectOdds(nums))

//pure recursive function // withouth helper method

function pureCollectOdds(arr){
    let result = []
    if(arr.length === 0){
        return result;
    }
    if(arr[0] % 2 !==0){
        result.push(arr[0])
    }
    result = result.concat(pureCollectOdds(arr.slice(1)))
    return result
}

console.log(pureCollectOdds(nums))