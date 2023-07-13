/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let sum = 0;
    let index = 1;
    while( sum < n) {
        sum += index;
        index ++;
    }
    if(sum != n) {
        index--;
    }
    return index - 1;
};
console.log(arrangeCoins(8))
console.log(arrangeCoins(10))