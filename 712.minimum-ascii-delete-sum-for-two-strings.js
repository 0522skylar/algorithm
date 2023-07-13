/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let m = s1.length;
    let n = s2.length;
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    for(let i = 1; i <= m; i++) {
        dp[i][0] = dp[i-1][0] + s1.charAt(i-1).charCodeAt()
    }
    for(let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j-1] + s2.charAt(j - 1).charCodeAt()
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(s1.charAt(i) === s2.charAt(j)) {
                dp[i+1][j+1] = dp[i][j]
            }
            else {
                dp[i+1][j+1] = Math.min(dp[i][j+1] + Number(s1.charAt(i).charCodeAt()), dp[i+1][j] + s2.charAt(j).charCodeAt());
            }
        }
    }
    return dp[m][n]
};

console.log(minimumDeleteSum("sea", "eat"))
console.log(minimumDeleteSum("delete",
"leet"))