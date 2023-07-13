/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let ans = 0;
    let m = grid.length;
    let n = grid[0].length;
    const dfs = (i, j, grid) => {
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return 0;
        }
        grid[i][j] = 0;
        let count = 1;
        count += dfs(i + 1, j, grid);
        count += dfs(i - 1, j, grid);
        count += dfs(i, j + 1, grid);
        count += dfs(i, j - 1, grid);
        return count;
    }

    for(let i = 0 ; i < m ; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                ans = Math.max(ans, dfs(i, j, grid))
            }
        }
    }

    return ans;
};

console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))