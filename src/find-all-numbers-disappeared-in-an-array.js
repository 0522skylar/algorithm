/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(i) === -1) {
            ans.push(i);
        }
    }
    return ans;
};