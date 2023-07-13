/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
     if(s.length === 2) {
         return s[0]===s[1]
     }
    let str = s + s;
    str = str.slice(1, str.length - 2);
    console.log(str, str.indexOf(s))
    if(str.indexOf(s) == -1) {
        return false
    }
    return true;
};
// console.log(repeatedSubstringPattern("abcabcabcabc"))
// console.log(repeatedSubstringPattern("ababab"))
// console.log(repeatedSubstringPattern("ababba")) //  false
console.log(repeatedSubstringPattern("abaababaab"))
console.log(repeatedSubstringPattern("bb")) //true