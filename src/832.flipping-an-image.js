/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  let ans = new Array(image.length).fill(0).map(() => new Array(image[0].length).fill(0))
console.log(image)
  let n = image[0].length
  for(let i = 0; i < image.length; i++) {
    for(let j = 0; j < n; j++) {
      ans[i][j] = image[i][n-j-1] === 0 ? 1 : 0
    }
  }
  return ans;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
// console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))