/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    if(maxMove <= 0) {
        return 0;
    }
    let mod = 1000_000_007;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // 保存第k步的结果
    let dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for(let k = 1; k <= maxMove; k++) {
        // 保存第k-1步的结果
        let temp = new Array(m).fill(0).map(() => new Array(n).fill(0));;
        for(let x = 0; x < m; x++) {
            for(let y = 0; y < n; y++) {
                for(item of dirs) {
                    let nx = x + item[0];
                    let ny = y + item[1];

                    if(nx < 0 || nx >= m || ny < 0 || ny >= n) {
                        temp[x][y] += 1;
                    }
                    else {
                        temp[x][y] = (dp[nx][ny] + temp[x][y]) % mod;
                    }
                }
            }
        }
        dp = temp.concat();
    }
    return dp[startRow][startColumn];
};

console.log(findPaths( 2, 2, 2,  0, 0))
console.log(findPaths( 1,3,3,0,1, 0))