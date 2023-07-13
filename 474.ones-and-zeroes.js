/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
 var findMaxForm = function(strs, m, n) {

    strs.sort((a,b) => a.length - b.length) 
    console.log(strs, '--------')
    let one  = 0;
    let two = 0;
    for(let i = 0; i < strs.length; i++) {
        if(one <= m && two <= n) {
            for(let j = 0; j < strs[i].length; j++) {
                if(strs[i][j] === '0') {
                    one++;
                }
                if(strs[i][j] === '1') {
                    two ++;
                }
            }
        }
        else {
            return i - 1
        }
        
    }
    if(one <= m && two <= n) {
        return strs.length;
    }
    return strs.length - 1;
};*/
const findMaxForm = (strs, m, n) => {
    const dp = Array.from(Array(m+1), () => Array(n+1).fill(0))
    let numOfZeros, numOfOnes;
    for(let str of strs) {
        numOfOnes = 0;
        numOfZeros = 0;
        for(let c of str) {
            if(c==='0') {
                numOfZeros++;
            }
            else {
                numOfOnes++;
            }
        }

        for(let i = m; i >= numOfZeros; i--){
            for(let j = n; j >= numOfOnes; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i-numOfZeros][j-numOfOnes] + 1);
            }
        }
        console.log(dp);
    }
    return dp[m][n];
}
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5,3)) // 4

// console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 4,3)) // 3
// console.log(findMaxForm(["10", "0", "1"], 1, 1)) // 2
// console.log(findMaxForm(["0","0","1","1"],2,2)) // 4
// console.log(findMaxForm(["10","0001","111001","1","0"], 50, 50)) // 5
// console.log(findMaxForm(["111","1000","1000","1000"],9,3)) // 3
