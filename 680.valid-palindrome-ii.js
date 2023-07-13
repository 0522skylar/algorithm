/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] != s[right]) {
        //    return false 
            return isValid(s, left + 1, right) || isValid(s, left, right - 1);
        }
        left++
        right--
    }
    return true

};

var isValid = function(s, i , j) {
    // s = s.replace(/[^\w]/g, '').toLowerCase()
    // 题目要求只考虑字母和数字字符，所以上面的写法也没啥问题
    // s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()

    while(i < j) {
        if(s[i] != s[j]) {
           return false 
        }
        i++
        j--
    }
    return true
};

console.log(validPalindrome( "aba"))
console.log(validPalindrome( "abca"))
console.log(validPalindrome( "abc"))