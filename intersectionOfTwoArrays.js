// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Input: nums1 = [4, 5, 9], nums2 = [4, 4, 8, 9]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


var intersect = function(nums1, nums2) {
    let obj = {}
    let answer = []
    for(let num of nums1){
        obj[num] = (obj[num] || 0) + 1
    }

    for(let num of nums2){
        if(obj[num] > 0){
            answer.push(num);
            obj[num]--;
        }
    }
    return answer;
};

const nums1 =  [4, 6, 7, 7, 7, 9]
const nums2 = [0, 0, 1, 2, 2, 4, 5, 6, 6]
               
console.log(intersect(nums1, nums2))