/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
  let ans = 0;
  let n = img1.length
  let tmp = 0
  let x = 1 - n
  let y = 1 - n
  while(x < n) {
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if(i + x < n && i + x > -1 && j + y > -1 && j + y < n && img1[i+x][j+y] == 1 && img1[i+x][j+y] === img2[i][j]) {
          tmp ++
        }
      }
    }

    ans = Math.max(ans, tmp)
    tmp = 0;
    y++
    if(y === n) {
      y = 1 - n
      x++
    }
  }

  return ans
};


console.log(largestOverlap([[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]]))