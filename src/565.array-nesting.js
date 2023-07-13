/**
 * @param {number[]} nums
 * @return {number}
 */

/*
let ans = [];
    let list = []
    const dfs = (i, list) => {
        if(list.includes(nums[i])) {
            ans = ans.length < list.length ? list.concat() : ans;
            return;
        }
        list.push(nums[i])
        dfs(nums[i], list);
        list.pop();
    }
*/
var arrayNesting = function(nums) { // ETL
    let ans = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != nums.length) {
            let count = 0;
            while(nums[i] != nums.length) {
                count++;
                let j = nums[i];
                nums[i] = nums.length;
                i = j;
            }
            ans = Math.max(ans, count)
        }
    }
    return ans;
};

console.log(arrayNesting([5,4,0,3,1,6,2]))