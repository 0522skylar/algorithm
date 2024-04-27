/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let ans = 0
  let start = 0
  let end = 1
  while (end < nums.length) {
    let maxP = 0
    for (let i = start; i < end; i++) {
      maxP = Math.max(maxP, i + nums[i]);
    }
    start = end;
    console.log(maxP)
    end = maxP + 1;
    ans++
  }
  return ans
};
console.log(jump([2, 3, 1, 1, 4]))
// 一个新项目,你会选择vue还是react? 
// 看团队技术栈

// 事件循环进阶
// 0,1,2,3,4,5
// Promise.resolve().then(() => {
//   console.log(0)
//   return Promise.resolve(4)
// }).then(res => {
//   console.log(res)
// })

// new Promise((resolve, reject) => {
//   resolve(2)
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve().then(() => {
//   console.log(1)
// }).then(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// }).then(() => {
//   console.log(5)
// })