/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
  let n = stones.length
  stones.sort((a, b) => a - b)
  //石头最大可放置空间=初始左右两端还未占用的空间 - min(左边第1,2颗之间空隙,右边第1,2颗之间空隙)
  let max = stones[n-1] - stones[0] + 1 - n
  max -= Math.min(stones[n-1] - stones[n-2] - 1, stones[1] - stones[0] - 1)
  //石头最小可放置空间=n大小连续空间里初始有最多颗石头的情况(滑动n大小窗口)
  let min = max

  for (let i = 0; i < n; i++) {
    let j = i
    while(j < n && stones[j] < stones[i] + n) {
      j++
    }
    //需要往stones[i]~stones[j]里移多少颗石头
    let cost = n - (j - i)
    //考虑特殊情况3,4,5,6,10,此时不能移10->7,而必须移3->8,10->7,故为两次
    if (j - 1 - i === n - 2 && stones[j-1] - stones[i] === n - 2) {
      cost = 2
    }
    min = Math.min(min, cost)
  }
  return [min, max]
};

console.log(numMovesStonesII([6,5,4,3,10]))