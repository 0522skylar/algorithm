/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 1) {
        return false
    }
    let ans = 1;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            ans += i
            ans += num / i;
        }
    }   
    return ans === num ? true : false
};
console.log(checkPerfectNumber(28))
console.log(checkPerfectNumber(7))