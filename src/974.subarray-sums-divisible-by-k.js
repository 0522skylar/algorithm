/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) { // TEL
  // let arr = [nums[0]]
  // for(let i = 1; i < nums.length; i++) {
  //   arr.push(nums[i] + arr[arr.length - 1])
  // }
  // let ans = 0
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % k === 0) {
  //     ans++
  //   }
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if ((arr[j] - arr[i]) % k === 0) {
  //       ans++
  //     }
  //   }
  // }
  // console.log(arr)
  // return ans;
  let ans = 0
  let pre = 0
  let dis = new Array(k).fill(0)
  dis[0] = 1
  for(let i = 0; i < nums.length; i++) {
    pre += nums[i]
    let mod = pre % k;
    if (mod < 0) {
      mod += k;
    }
    ans += dis[mod] // 之前有这样的mod值
    console.log(mod, ans)

    dis[mod]++ // 新增加一次,方便下次累加
  }
  console.log(dis)
  return ans;
};

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))
console.log(subarraysDivByK([5], 9))
console.log(subarraysDivByK([0,-5], 10)) // 1