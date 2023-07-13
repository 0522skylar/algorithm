/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
 var findDuplicates = function(nums) {
    let arr = new Array(nums.length + 1).fill(0)
    // console.log(arr)

    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]] ++;
    }
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 2) {
            ans.push(i)
        }
    }
    // return ans;
    return nums.filter((val, idx) => {
        console.log(nums.indexOf(val), idx)
        return nums.indexOf(val) !== idx
    })
}; 

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const res = [];
    for (let num of nums) {
        num = Math.abs(num);
        let index = num - 1;
        let t = nums[index];
        nums[index] = -t;
        if (t < 0) {
            res.push(num);
        }
    }
    
    return res;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1])) // [2,3]
// console.log(findDuplicates([1,1,2])) // [1]
// console.log(findDuplicates([2,2])) // [2]