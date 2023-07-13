/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length;
    let dp = new Array(len+1).fill(0);
    let cnt = 0;
    for(let i = 0; i < len ; i++) {
        dp[i] = 1;
        cnt++;
        for(let j = 0; j < i; j++) {
            if(s[j] === s[i] && dp[j+1] == 1) {
                dp[j] = 1;
                cnt++;
            } else {
                dp[j] = 0;
            }
        }
    }
    return cnt
};

const isStr = (str) => {
    let fir = 0;
    let end = str.length - 1;
    while(fir != end) {
        if(str[fir] != str[end]) {
            return false
        }
        fir++;
        end--;
    }
    return true
}

console.log(countSubstrings("aaa"))
console.log(countSubstrings("abc"))