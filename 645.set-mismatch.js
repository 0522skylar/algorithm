
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b) => a - b)
    let fir = 0;
    let sec = 0;
    let arr = new Array(nums.length+1).fill(0)
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]]++
    }
    // console.log(arr)
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === 0) {
            sec = j;
        }
        if(arr[j] === 2) {
            fir = j
        }
    }
    return [fir, sec]
};
console.log(findErrorNums([1,2,2,4]))
console.log(findErrorNums([3,2,3,4,6,5]))
console.log(findErrorNums([1,2,2,4]))
console.log(findErrorNums([1,1]))
console.log(findErrorNums([2,2]))