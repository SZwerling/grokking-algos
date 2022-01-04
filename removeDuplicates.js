// /**
//  * @param {number[]} nums
//  * @return {number}
//  *//
 var removeDuplicates = function(nums) {
    let count1 = 0;
    let count2 = 1;
    if(nums.length < 2){
        return nums
    }
    while(count2 < nums.length){
        if(nums[count1] === nums[count2]){
            nums.splice(count2, 1);
        } else {
            count1++;
            count2++;
        }
    }
    return nums
    
};

const numz = [1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6]
console.log(removeDuplicates(numz))