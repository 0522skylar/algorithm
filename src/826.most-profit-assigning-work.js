/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  let ans = 0;
  let arr = new Array(100000).fill(0)
  for(let i = 0; i < difficulty.length; i++) {
    // 有不同的i任务中工作难度相同
    arr[difficulty[i]] = Math.max(profit[i], arr[difficulty[i]])
  }
  // console.log(arr)
  for(let i = 0; i < worker.length; i++) {
    let temp = [0]
    for(let j = 0; j < difficulty.length; j++) {
      if(difficulty[j] <= worker[i]) {
        // console.log(arr[difficulty[j]], difficulty[j])
        temp.push(arr[difficulty[j]])
      }
    }
    // console.log(temp)
    ans += Math.max(...temp)
  }
  return ans;
};
 
console.log(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]))
console.log(maxProfitAssignment([85,47,57], [24,66,99],  [40,25,25]))

console.log(maxProfitAssignment([66,1,28,73,53,35,45,60,100,44,59,94,27,88,7,18,83,18,72,63],
  [66,20,84,81,56,40,37,82,53,45,43,96,67,27,12,54,98,19,47,77],
  [61,33,68,38,63,45,1,10,53,23,66,70,14,51,94,18,28,78,100,16])) // 1392