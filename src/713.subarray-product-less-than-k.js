/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
// dfs  TEL
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0;
    let temp = [];
    const dfs = (i) => {
        let count = 1;
        for(let kk = 0; kk < temp.length; kk++) {
            count *= temp[kk]
        }
        if(count < k && temp.length != 0) {
            ans++;
        }
        for(let j = i; j < nums.length; j++) {
            if(j > i) {
                continue;
            }
            temp.push(nums[j]);
            dfs(i+1);
            temp.pop();
        }
    }
    for(let i = 0; i < nums.length; i++) {
        dfs(i)
    }
    return ans;
};
*/
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        let pro = 1;
        for(let j = i; j < nums.length; j++) {
            pro *= nums[j];
            if(pro >= k) {
                break;
            }
            ans++;
        }
    }
    return ans;
};

console.log(numSubarrayProductLessThanK([10,5,2,6], 100))