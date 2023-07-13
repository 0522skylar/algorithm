/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let ans = 0;
  
  if( n < 3 || m < 3) {
    return 0
  }

  for(let i = 0; i <= n - 3; i++) {
    for(let j = 0; j <= m - 3; j++) {
      let three = new Array(3).fill(0).map(() => new Array(3).fill(0))
      let arr = [1,2,3,4,5,6,7,8,9]
      for(let k = 0; k < 3; k++) {
        for(let h = 0; h < 3; h++) {
          three[k][h] = grid[i+k][j+h]
          let index = arr.indexOf(grid[i+k][j+h])
          if ( index != -1) {
            arr.splice(index, 1)
          }
        }
      }
      // console.log(three)

      if(arr.length === 0 && isHuan(three)) {
        ans++;
      }
    }
  }
  return ans;

};

const isHuan = (grid) => {
  let n = grid[0][1] + grid[0][2] + grid[0][0]
  for(let i = 1; i < 3; i++) {
    let sum = grid[i][1] + grid[i][2] + grid[i][0]
    if (sum != n) {
      return false
    }
  }
  for(let i = 0; i < 3; i++) {
    let sum = grid[1][i] + grid[2][i] + grid[0][i]
    if (sum != n) {
      return false
    }
  }
  let one = grid[0][0] + grid[1][1] + grid[2][2]
  if (one != n) {
    return false
  }
  let two = grid[0][2] + grid[1][1] + grid[2][0]
  if (two != n) {
    return false
  }
  return true
}

console.log(numMagicSquaresInside( [[4,3,8,4],[9,5,1,9],[2,7,6,2]]))