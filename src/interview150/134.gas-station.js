/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) { // TEL
  let ans = -1
  let sum = 0
  let index = 0
  let flag  = false
  let n = gas.length
  while(index < n) {
    sum = gas[index]
    if (gas[index] <= cost[index]) {
      index++
      continue
    }
    for (let i = index; i < n * 2; i++) {

      if (sum - cost[i % n] < 0) {
        sum = 0
        ans = -1
        break
      } else if (i % n === index && i != index) {
        ans = index
        flag = true
        break
      }
      sum += gas[(i+1) % n] - cost[i % n]
    }
    if (flag) {
      break
    }
    index++;
  }
  return ans
};

const canCompleteCircuit1 = (gas, cost) => {
  const n = gas.length
  let i = 0
  while(i < n) {
    let sumOfGas = 0
    let sumOfCost = 0
    let cnt = 0
    while(cnt < n) {
      const j = (i + cnt) % n
      sumOfGas += gas[j]
      sumOfCost += cost[j]
      if (sumOfGas < sumOfCost) {
        break
      }
      cnt++
    }
    // console.log(cnt, 'cnt', i)
    if (cnt === n) {
      return i;
    } else {
      i += cnt + 1
    }
  }
  return -1
}

console.log(canCompleteCircuit1([1,2,3,4,5], [3,4,5,1,2]))
console.log(canCompleteCircuit1([2,3,4], [3,4,3]))