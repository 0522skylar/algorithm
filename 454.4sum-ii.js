
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums1.length; j++) {
            if(map.has(nums1[i] + nums2[j])) {
                map.set(nums1[i] + nums2[j], map.get(nums1[i] + nums2[j]) + 1)
            }
            else {

                map.set(nums1[i] + nums2[j], 1)
            }
        }
    }
    let ans = 0;
    console.log(map);
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums1.length; j++) {
            let sum = nums3[i] + nums4[j] === 0 ? 0 : -(nums3[i] + nums4[j]) 
            if(map.has(sum)) {
                ans += map.get(sum)
            }
        }
    }
    return ans;
};
// console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2])) // 2
console.log(fourSumCount([-1,-1],[-1,1],[-1,1],[1,-1])) // 6