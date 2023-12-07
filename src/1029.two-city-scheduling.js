/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let ans = 0
  for (let i = 0; i < costs.length; i++) {
    ans += costs[i][0]
  }
  let arr = []
  for (let j = 0; j < costs.length; j++) {
    arr.push(costs[j][0] - costs[j][1])
  }
  arr.sort((a, b) => a - b)
  for (let i = arr.length - 1; i >= arr.length / 2; i--) {
    ans -= arr[i]
  }
  return ans;
};

console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]))//1859