/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
 
  let ares = aliceSizes.reduce((total, num) => { return total + num })
  let bres = bobSizes.reduce((total, num) => { return total + num })
  let result = (ares + bres) / 2
  
  let ans = []
  aliceSizes = aliceSizes.sort((a, b) => {
    return b - a
  })
  for(let i = 0; i < aliceSizes.length; i++) {
    let item = aliceSizes[i]
    let res = ares - item;
    for(let j = 0; j < bobSizes.length; j++) {
      if (res + bobSizes[j] === result) {
        ans.push(item)
        ans.push(bobSizes[j])
        break;
      }
    }
    if (ans.length != 0) {
      break
    }
  }
  return ans;
};

console.log(fairCandySwap([1,1], [2,2]))
console.log(fairCandySwap([1,2], [2,3]))
console.log(fairCandySwap([2], [1,3]))
console.log(fairCandySwap([1,2,5], [2,4]))