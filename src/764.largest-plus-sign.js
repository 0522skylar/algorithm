/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    let grid = new Array(n).fill(Number.MAX_VALUE).map(() => new Array(n).fill(Number.MAX_VALUE))

    for(let item of mines) {
        let x = item[0];
        let y = item[1];
        grid[x][y] = 0;
    }

    for(let i = 0; i < n; i++) {
        let up = 0;
        let down = 0;
        let right = 0;
        let left = 0;
        for(let j = 0, k = n-1; j < n; j++, k--) {
            left = grid[i][j] === 0 ? 0 : left + 1;
            right = grid[i][k] === 0 ? 0 : right + 1;
            up = grid[j][i] === 0 ? 0 : up + 1;
            down = grid[k][i] === 0 ? 0 : down + 1;

            grid[i][j] = Math.min(grid[i][j], left)
            grid[i][k] = Math.min(grid[i][k], right)
            grid[j][i] = Math.min(grid[j][i], up)
            grid[k][i] = Math.min(grid[k][i], down)
        }
    }

    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ans = Math.max(ans, grid[i][j])
        }
    }
    // console.log(grid)
    return ans;
};

console.log(orderOfLargestPlusSign(5, [[4,2]]))
console.log(orderOfLargestPlusSign(1, [[0,0]]))