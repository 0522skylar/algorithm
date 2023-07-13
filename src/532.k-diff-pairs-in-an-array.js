/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let visit = new Set();
    let ans = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(visit.has(nums[i] - k)) {
            ans.add(nums[i] - k);
        }
        if(visit.has(nums[i] + k)) {
            ans.add(nums[i])
        }
        visit.add(nums[i])
    }
    // console.log(visit);
    // console.log(ans)
   return ans.size;
};

console.log(findPairs( [3, 1, 4, 1, 5], 2)) // 2
console.log(findPairs( [1, 2, 3, 4, 5], 1)) // 4 
console.log(findPairs( [1, 3, 1, 5, 4], 0)) // 1
console.log(findPairs( [1,2,4,4,3,3,0,9,2,3], 3)) // 2
console.log(findPairs([6,3,5,7,2,3,3,8,2,4], 2)) // 5