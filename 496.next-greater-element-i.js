/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for(let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]) + 1;
        let flag = 1;
        // console.log(index)
        while(nums2.length > index) {
            if(nums2[index] > nums1[i]) {
                flag = 0;
                ans.push(nums2[index])
                break;
            }
            index++;
        }
        if(flag) {
            ans.push(-1)
        }
    }
    return ans;
};
console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
console.log(nextGreaterElement([2,4], [1,2,3,4]))

console.log(nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7])) // [7,7,7,7,7]