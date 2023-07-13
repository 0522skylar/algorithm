/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    // f(n) = 2 * f(n-1) + f(n-3)

    if(n === 1) {
        return 1
    } 
    if(n === 2) {
        return 2
    }
    if(n === 3) {
        return 5
    }

    let n1 = 1;
    let n2 = 2;
    let n3 = 5;
    let temp = 0;
    for(let i = 4; i <= n; i++) {
        temp = (2 * n3) % 1000000007 + n1 % 1000000007
        n1 = n2
        n2 = n3;
        n3 = temp % 1000000007
    }
    return n3
};

console.log(numTilings(5)) // 24
console.log(numTilings(4)) // 11
console.log(numTilings(3)) // 5