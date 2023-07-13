const {
    lstat
} = require("fs-extra");

/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let ans = 0;
    let cur = 1;
    let last = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            cur++;
        } else {
            last = cur;
            cur = 1;
        }
        if (last >= cur) {
            ans++;
        }
    }
    return ans
};
// console.log(countBinarySubstrings("00110011"))
console.log(countBinarySubstrings("10101"))