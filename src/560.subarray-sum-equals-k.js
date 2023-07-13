/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum === k) {
            ans++;
        }
        if(map.has(sum - k)) {
            ans += map.get(sum - k)
        }
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return ans;
};

console.log(subarraySum([1,1,1], 2)) // 2
console.log(subarraySum([1,2,3], 3)) // 2
console.log(subarraySum([1,2,3], 5)) // 1
console.log(subarraySum([1,2,1,2,1],3)) // 4