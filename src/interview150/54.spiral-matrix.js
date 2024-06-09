/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans = []
  let bottom = matrix.length - 1
  let right = matrix[0].length - 1
  let count = 1
  let left = 0
  let top = 1
  let i = 0
  let j = 0

  let cur = 1
  while(count <= matrix.length * matrix[0].length) {
    ans.push(matrix[i][j])
    // console.log(i, j, cur)
    if (cur === 1) { // 右
      if(j <= right) {
        if (j === right) {
          // i++
          right -= 1
          cur = 2
        } else {
          j++
        }
      }
    }
    if (cur == 0) { // 上
      if(i >= top) {
        if (i == top) {
          j++
          top += 1
          cur = 1
        } else {
          i--
        }
      } 
    } 
    if (cur === 2) { // 下
      if (i <= bottom) {
        if (i === bottom) {
          // j--
          bottom -= 1
          cur = 3
        } else {
          i++
        }
      }
      
    }
    if (cur === 3) { // 左
      if (j >= left) {
        if (j === left) {
          i-- // 既要换方向又要改变位置
          left += 1
          cur = 0
        } else {
          j--
        }
      }
      
    }
    

    count++
  }
  return ans
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))