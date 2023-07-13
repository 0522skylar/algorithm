/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    for(let i = 1; i <= m; i++) {
        const c1 = word1[i - 1];
        for(let j = 1; j <= n; j++) {
            const c2 = word2[j - 1];
            if(c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    const ans = dp[m][n];
    return  m - ans + n - ans;  
};

console.log(minDistance("sea", "eat")) // 2
console.log(minDistance("leetcode", "etco")) // 4
console.log(minDistance("a", "b")) // 2
console.log(minDistance("ab", "bc")) // 2