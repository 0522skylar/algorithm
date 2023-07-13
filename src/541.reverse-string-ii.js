/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let ans = ''
    for(let i = 0; i < s.length; i+=(2*k)) {
        let fan = s.slice(i, i+k).split('').reverse().join('');
        let char = fan + s.slice(i+k, i+2*k);
        ans += char
    }
    return ans;
};

console.log(reverseStr("abcdefg", 2))
console.log(reverseStr("abcddfsn", 3))
console.log(reverseStr("abcd", 2))