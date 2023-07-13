/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    let ans = [];
    let n = heights[0].length ;
    let m = heights.length ;
    let pacific = new Array(m).fill(false).map(()=>new Array(n).fill(false));
    let atlantic  = new Array(m).fill(false).map(()=>new Array(n).fill(false));
    
    for(let i = 0; i < m; ++i) {
        dfs(heights, i, 0, pacific, heights[i][0]);
        dfs(heights, i, n-1, atlantic, heights[i][n-1]);
    }
    for(let i = 0; i < n; ++i) {
        dfs(heights, 0, i, pacific, heights[0][i]);
        dfs(heights, m-1, i, atlantic, heights[m-1][i]); 
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(atlantic[i][j] && pacific[i][j]) {
                ans.push([i, j]);
            }
        }
    }
    console.log(atlantic)
    console.log(pacific);
    return ans;
};

const dfs = (heights, x, y, visted, pre) => {
    if(x < 0 || y < 0 || x >= heights.length || y >= heights[0].length || visted[x][y] || heights[x][y] < pre) {
        return;
    }
    else {
        visted[x][y] = true;
        dfs( heights,x-1, y, visted, heights[x][y]);
        dfs( heights,x+1, y, visted, heights[x][y]);
        dfs( heights,x, y+1, visted, heights[x][y]);
        dfs( heights,x, y-1, visted, heights[x][y]);
    }
}

let heights = [[1,1],[1,1],[1,1]];
console.log(pacificAtlantic(heights))
