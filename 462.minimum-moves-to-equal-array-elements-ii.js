/**
 * @param {number[]} nums
 * @return {number}
 */
//  var minMoves2 = function(nums) { // wc
//     let sum = nums.reduce((prev, next) => {
//         return prev + next
//     })
//     sum = Math.round(sum / nums.length)
//     sum = 1
//     console.log(sum)
//     let ans = 0;
//     for(let i = 0; i < nums.length; i++) {
//         ans += Math.abs(nums[i] - sum)
//     }
//     return ans;
// };

var minMoves2 = function(nums) { // wc
    nums.sort((a, b) => a - b)
    let ans = 0;
    let i = 0; 
    let j = nums.length - 1;
    while( i < j ) {
        ans += nums[j--] - nums[i++]
    }
    return ans;
};

// console.log(minMoves2([1,2,3])) // 2
// console.log(minMoves2([1, 10, 2 , 9])) // 16
console.log(minMoves2([1,0,0,8,6])) //  14