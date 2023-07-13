/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let index = candyType.length / 2;
    let arr =  [...new Set(candyType)];
    if(index <= arr.length) {
        return index;
    }
    else {
        return arr.length;
    }
};
console.log(distributeCandies([1,1,2,2,3,3]))
console.log(distributeCandies([1,1,2,3]))
console.log(distributeCandies([6,6,6,6]))