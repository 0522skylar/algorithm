/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
  let ansA = 0
  let ansB = 0
  let mapA = new Map()
  let mapB = new Map()
  for (let i = 0; i < tops.length; i++) {
    if (mapA.has(tops[i])) {
      mapA.set(tops[i], mapA.get(tops[i]) + 1)
    } else {
      mapA.set(tops[i], 1)
    }
    if (mapB.has(bottoms[i])) {
      mapB.set(bottoms[i], mapB.get(bottoms[i]) + 1)
    } else {
      mapB.set(bottoms[i], 1)
    }
  }
  if (mapA.size == 1 || mapB.size == 1) {
    return 0
  }
  let maxA = 0
  let indexA = -1
  for (let item of mapA) {
    // console.log(item)
    if (maxA < item[1]) {
      maxA = item[1]
      indexA = item[0]
    }
  }
  
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] != indexA && bottoms[i] == indexA) {
      ansA++
    }
    if (tops[i] != indexA && bottoms[i] != indexA) {
      ansA = -1
      break
    }
  }

  let maxB = 0
  let indexB = -1
  for (let item of mapB) {
    if (maxB < item[1]) {
      maxB = item[1]
      indexB = item[0]
    }
  }

  for (let i = 0; i < tops.length; i++) {
    if (bottoms[i] != indexB && tops[i] == indexB) {
      ansB++
    }
    if (bottoms[i] != indexB && tops[i] != indexB) {
      ansB = -1
      break
    }
  }
  if (ansA != -1 && ansB != -1) {
    return Math.min(ansA, ansB)
  }
  if (ansA != -1) {
    return ansA
  }
  if (ansB != -1) {
    return ansB
  }
  return -1
};

console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]))
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4]))