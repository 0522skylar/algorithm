/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let num = x ^ y;
    const count_one_bits = (n) => {
        let count = 0;
        while(n) {
            n = n & (n-1);
            count++;
        }
        return count
    }
    return count_one_bits(num)
};
console.log(hammingDistance(1, 4)) // 2
console.log(hammingDistance(3, 1)) // 1