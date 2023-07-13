const e = require("express");

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const dfs = (i, j, color, oldVal) => {
        if(i >= image.length || i < 0 || j < 0 || j >= image[0].length || image[i][j] != oldVal || image[i][j] === color) {
            return ;
        }
        image[i][j] = color
        dfs(i-1, j, color, oldVal);
        dfs(i, j-1, color, oldVal);
        dfs(i + 1, j, color, oldVal);
        dfs(i, j + 1, color, oldVal);
        return
    }
    let oldVal = image[sr][sc];
    dfs(sr, sc, color, oldVal)
    return image;
};
// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1,1, 2))
// console.log(floodFill([[0,0,0],[0,0,0]], 0,0, 2))
console.log(floodFill([[0,0,0],[0,0,0]], 0,0, 0))