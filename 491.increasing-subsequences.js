/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let ans = [];
    let temp = []

    const dfs = (i) => {
        if(temp.length >= 2) {
            ans.push(temp.concat());
        }
        let used = [];
        for(let j = i; j < nums.length; j++) {
            if((nums[j] < temp[temp.length - 1] && temp.length > 0) || used[nums[j]]) {
                continue;
            }
            used[nums[j]] = true;
            temp.push(nums[j]);
            dfs(j+1);
            temp.pop();
        }
    }
    dfs(0)
    return ans;
};

console.log(findSubsequences([4,6,7,7]))
console.log(findSubsequences([4,4,3,2,1]))

/*
var findSubsequences = function(nums) {
    let result = []
    let path = []
    function backtracing(startIndex) {
        if(path.length > 1) {
            result.push(path.slice())
        }
        let uset = []
        for(let i = startIndex; i < nums.length; i++) {
            if((path.length > 0 && nums[i] < path[path.length - 1])|| uset[nums[i] + 100]) {
                continue
            }
            uset[nums[i] + 100] = true
            path.push(nums[i])
            backtracing(i + 1)
            path.pop()
        }
    }
    backtracing(0)
    return result
};
*/