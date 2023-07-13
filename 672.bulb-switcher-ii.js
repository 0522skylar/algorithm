/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
    switch(n) {
        case 0: 
            return 0;
        case 1:
            return (presses > 0) + 1;
        case 2:
            return (presses > 1) + (presses > 0) * 2 +1;
    }
    switch(presses) {
        case 0: 
            return 1;
        case 1:
            return 4;
        case 2: 
            return 7;
    }
    return 8;
};

console.log(flipLights(1, 1))
console.log(flipLights(2, 1))
console.log(flipLights(3, 1))