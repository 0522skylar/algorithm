/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
    
    if(n == 4) {
        return 4;
    }
    while(!isValid(n)) {
        let t = 0;
        for(let i = 2; i * i <= n; i++) {
            while(n % i === 0) {
                t += i;
                n /= i;
            }
        }
        if(n > 1) {
            t += n;
        }
        n = t;
    }
    return n;

};
const isValid = (n) => {
    for(let i = 2; i <= n / i; i++) {
        if(n % i == 0) {
            return false
        }
    }
    return true
}
console.log(smallestValue(15))
console.log(smallestValue(3))