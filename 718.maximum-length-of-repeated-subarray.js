const { map } = require("lodash");

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let ans = 0;
    let dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0));
    for(let i = 1; i <= nums1.length; i++) {
        for(let j = 1; j <= nums2.length; j++) {
            if(nums1[i-1] === nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
                ans = Math.max(dp[i][j], ans)
            }
        }
    }
    // console.log(dp)
    return ans;
};
console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))
console.log(findLength([0,0,0,0,0], [0,0,0,0,0]))
console.log(findLength(
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0])) // 9