/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let arr = new Array(26).fill(0);
    let left = 0
    let res = 0;
    let maxVal = 0;
    for(let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 65]++;
        maxVal = Math.max(maxVal, arr[s[i].charCodeAt() - 65]);// 出现次数最多的字母个数
        while(i - left + 1 - maxVal > k) {
            arr[s[left].charCodeAt() - 65]--;
            left++;
        }
        res = Math.max(res, i - left + 1);
    }
    // console.log(left);
    return res;
};

// console.log(characterReplacement("ABAB", 2)) // 4

// console.log(characterReplacement("AABABBA", 1)) // 4

module.exports = characterReplacement;

// export default characterReplacement;