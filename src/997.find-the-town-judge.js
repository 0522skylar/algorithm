/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  // let arr = new Array(n).fill(0)
  let arrA = new Array(n).fill(0)
  let arrB = new Array(n).fill(0)
  for(let i = 0; i < trust.length; i++) {
    arrA[trust[i][0] - 1]++
    arrB[trust[i][1] - 1]++
  }
  for(let i = 0; i < n; i++) {
    if (arrB[i] === n - 1 && arrA[i] == 0) {
      return i+1
    }
  }
  // console.log(arrA,arrB)
  return -1
  // return index;
};

console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))
console.log(findJudge(2, [[1,2]]))
console.log(findJudge(3, [[1,3],[2,3]]))
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))