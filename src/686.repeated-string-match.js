/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    if(b.length <= a.length) {
        if(a.indexOf(b) != -1) {
            return 1;
        }
        let str = a + a;
        if(str.indexOf(b) != -1) {
            return 2;
        }
        return -1;
    }
    /*
    for(let i = 0; i < b.length; i++) {
        if(a.indexOf(b[i]) === -1) {
            return -1;
        }
        if(a[acount] === b[i]) {
            // console.log(i, b[i])
            acount++;
            if(acount === a.length) {
                // console.log(b[i], acount)
                ans++;
                acount = 0;
            }
        }
    }*/
    let n = Math.ceil( b.length / a.length) + 1;
    let str = '';
    for(let i = 0; i <= n; i++) {
        str += a;
        if(str.indexOf(b) != -1) {
            return i + 1;
        }
    }
    return -1;
};
console.log(repeatedStringMatch("abcd",  "cdabcdab"))
console.log(repeatedStringMatch("a", "aa"))
console.log(repeatedStringMatch("a", "a"))
console.log(repeatedStringMatch("abc", "wxyz"))
console.log(repeatedStringMatch("abcabcabcabc", "abac"))

console.log(repeatedStringMatch("abaabaa", "abaababaab")) // -1

console.log(repeatedStringMatch("baa", "abaab"))