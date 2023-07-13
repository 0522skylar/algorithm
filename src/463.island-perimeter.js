const { is } = require("express/lib/request");

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let ans = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                ans += 4;
                // 左边是岛屿
                if( i > 0 && grid[i-1][j] === 1 ) {
                    ans -= 2;
                }
                // 上边是岛屿
                if(j > 0 && grid[i][j-1] === 1) {
                    ans -= 2;
                }
                // 由于是行优先遍历，所以只要考虑左边和上边即可
            }
        }
    }
    return ans;
};
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
console.log(islandPerimeter([[1]]))
console.log(islandPerimeter([[1, 0]]))