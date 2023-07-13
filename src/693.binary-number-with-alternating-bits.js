/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let str = n.toString(2);
    for(let i = 1; i < str.length; i++) {
        if(str[i] === str[i-1]) {
            return false
        }
    }
    return true;
};

console.log(hasAlternatingBits(5))
console.log(hasAlternatingBits(7))
console.log(hasAlternatingBits(11))