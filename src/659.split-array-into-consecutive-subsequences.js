/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        else {
            map.set(nums[i], 1)
        }
    }
    for(let i = 0; i < nums.length; i++) {
        let subNum = 0;
        let p = 1;
        let next = nums[i];
        while(map.get(next) >= p) {
            p = map.get(next);
            map.set(next, p - 1);
            ++subNum;
            ++next
        }
        if(subNum > 0 && subNum < 3) {
            return false
        }
    }
    return true;
};
console.log(isPossible( [1,2,3,3,4,5]))
// console.log(isPossible([1,2,3,3,4,4,5,5]))
// console.log(isPossible([1,2,3,4,4,5]))