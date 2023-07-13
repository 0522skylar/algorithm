/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let ans = 0;
    let visit = new Array(isConnected.length).fill(false)

    const dfs = (i) => {
        for(let j = 0; j < isConnected.length; j++) {
            if(isConnected[i][j] === 1 && !visit[j]) {
                visit[i] = true;
                dfs(j)
            }
        }
    }
    for(let i = 0; i < isConnected.length; i++) {
        if( !visit[i] ) {
            dfs(i);
            ans++;
        }
    }
    return ans;
};
console.log(findCircleNum( [[1,1,0],[1,1,0],[0,0,1]]))
console.log(findCircleNum( [[1,0,0],[0,1,0],[0,0,1]]))