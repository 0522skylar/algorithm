/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let xShift = [-1,-1,-1,0,0,1,1,1];
    let yShift = [-1,0,1,-1,1,-1,0,1];
    const dfs = (m, n, i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != 'E') {
            return;
        }
        let sum = 0;
        let k, x, y;
        /* 统计周边地雷的个数 */
        for (let k = 0; k < 8; k++) {
            x = i + xShift[k];
            y = j + yShift[k];
            if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] == 'M') {
                sum++;
            }
        }
        /* 地雷个数为0, 标记为B, 递归处理周边元素 */
        /*     个数非0, 标记为'0'+sum           */
        if (sum == 0) {
            board[i][j] = 'B';
            for (let k = 0; k < 8; k++) {
                x = i + xShift[k];
                y = j + yShift[k];
                dfs( m, n, x, y);
            }
        } else {
            board[i][j] = '' + sum;
        }
        return;
    }

    let m = board.length;
    let n = board[0].length;
    /* 当前位置为地雷M */
    if (board[click[0]][click[1]] == 'M') {
        board[click[0]][click[1]] = 'X';
        return board;
    }
    /* 处理所挖位置为E */
    dfs(m, n, click[0], click[1]);
    return board;
};

console.log(updateBoard([["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]))