/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums.slice(0, nums.length - 1)];
    let ans = []
    for(let i = 0; i < nums.length; i++) {
        let next = i + 1;
        let flag = 0;
        while(next < arr.length) {
            if(arr[next] > nums[i]) {
                flag = 1;
                ans.push(arr[next]);
                break;
            }
            next++;
        }
        if(!flag) {
            ans.push(-1)
        }
    }
    return ans;
};

console.log(nextGreaterElements([1,2,1]))
console.log(nextGreaterElements([1,2,3,4,3]))