/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    for(let i = Math.floor(Math.sqrt(area)); i >= 2; i--){
        if(area % i === 0) {
            let n = area / i;
            if(n >= i) {
                return [n, i]
            }
            else {
                return [i, n]
            }
        }
    }
    return [area, 1];
};

console.log(constructRectangle(4))
console.log(constructRectangle(37))
console.log(constructRectangle(122122))