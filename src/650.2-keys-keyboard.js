/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let ans = 0;
    for(let i = 2; i <= n; i++) {
        while(n % i === 0) {
            ans += i;
            n /= i;
        }
    }
    return ans;
};
console.log(minSteps(3))
console.log(minSteps(1))