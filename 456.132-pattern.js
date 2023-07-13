/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
var find132pattern = function(nums) {//TEL
    let count = 0;
    let first = nums[count];
    for(let i = count + 1; i < nums.length ; i++) {
        let sec = nums[i];
        for(let j = i+1; j < nums.length; j++) {
            let thr = nums[j];
            if(first < thr && thr < sec) {
                return true
            }
        }
        if(i == nums.length - 1) {
            count ++;
            i = count;
            first = nums[count];
        }

    }
    return false;
};
*/

var find132pattern = function(nums) {//TEL
    let n = nums.length;
    if( n < 3 ) {
        return false;
    }
    let min = nums[0];
    for(let i = 0; i < n; i++) {
        min = Math.min(min, nums[i]); // 找到最小值即1
        if(min == nums[i])// 若最小值为当前值则进行下一次遍历
            continue;
        for(let j = n-1; j > i; j--) {
            if(min < nums[j] && nums[j] < nums[i]) {
                return true;
            } //若出现32则返回正确
        }
    }
    return false;
};
// console.log(find132pattern([1,2,3,4]))
console.log(find132pattern([3,1,4,2]))
// console.log(find132pattern([-1,3,2,0]))