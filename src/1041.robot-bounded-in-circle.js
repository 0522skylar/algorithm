/**
 * @param {string} instructions
 * @return {boolean}
 */
/*
var isRobotBounded = function(instructions) {
  let cur = [0,0]
  let d = 0
  let n = instructions.length
  for (let i = 0; i < n * 4; i++) {
    if (instructions[i % n] === 'R') {
      d = (d + 1) % 4
    } else if (instructions[i % n] === 'L') {
      d = (d - 1) % 4
    }
    else if (instructions[i % n] === "G") {
      if (d === 0) {
        cur[1] += 1
      } else if (d == 1) {
        cur[0] += 1
      } else if (d ===2) {
        cur[1] -= 1
      } else if (d === 3) {
        cur[0] -= 1
      }
    }
    // console.log(cur)
    if ((cur[0] == 0 && cur[1] == 0) && i % n == n - 1) {
      return true
    }
  }
 
  return false
};
*/

var isRobotBounded = function(instructions) {
  const dire = [[0,1], [1,0], [0,-1], [-1, 0]]
  let direIndex = 0
  let x = 0
  let y = 0
  let n = instructions.length
  for (let i = 0; i < n; i++) {
    let item = instructions[i]
    if (item == 'G') {
      x += dire[direIndex][0]
      y += dire[direIndex][1]
    } else if (item === 'L') {
      direIndex += 3
      direIndex %= 4
    } else {
      direIndex++
      direIndex %= 4
    }
  }
  return direIndex != 0 || ( x==0  && y == 0)
}

console.log(isRobotBounded("GLGLGGLGL")) // false
console.log(isRobotBounded("GGLLGG")) // true