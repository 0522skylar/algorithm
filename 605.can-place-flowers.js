/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let ans = 0
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] == 0 && (i + 1 === flowerbed.length || flowerbed[i+1] == 0)
        && (i == 0 || flowerbed[i-1] == 0)) {
            flowerbed[i] = 1;
            ans++;
        }
    }

    return ans >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))

console.log(canPlaceFlowers([1,0,0,0,0,1], 2))
console.log(canPlaceFlowers([0,0,0,0,0,0], 2))