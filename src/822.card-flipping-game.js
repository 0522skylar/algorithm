/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  let ans = -1;
  for(let i = 0; i < backs.length; i++) {
    if(backs.indexOf(fronts[i]) === -1) {
      if(ans === -1) {
        ans = fronts[i]
      } else {
        ans = Math.min(ans, fronts[i])
      }
    }
  }
  // for(let i = 0; i < backs.length; i++) {
  //   if(fronts.indexOf(backs[i]) === -1) {
  //     if(ans === -1) {
  //       ans = backs[i]
  //     } else {
  //       ans = Math.min(ans, backs[i])
  //     }
  //   }
  // }

  return ans === -1 ? 0 : ans
};

var flipgame2 = function(fronts, backs) {
  let set = new Set(); // 记录两面相同的数
  fronts.forEach((i,idx) => {
      if (i === backs[idx]) set.add(i);
  });
  console.log(set)
  let res = Infinity;
  for (let i of fronts) { // 选取剩下的最小的数
      if (!set.has(i)) res = Math.min(res, i);
  }
  for (let i of backs) {
      if (!set.has(i)) res = Math.min(res, i);
  }
  return res === Infinity ? 0 : res;
};


console.log(flipgame2([1,2,4,4,7], [1,3,4,1,3])) // 2
console.log(flipgame2([1,1], [1,2])) // 2

console.log(flipgame2([1,2],[2,1])) // 1