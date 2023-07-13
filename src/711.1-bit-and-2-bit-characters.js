/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits[bits.length - 1] != 0) {
        return false;
    }
    let count = 0;
    let len = bits.length - 2;
    if(bits[len] === 0) {
        return true;
    }
    for(let i = len; i >= 0; i--) {
        if(bits[i] === 1) {
            count++;
        } else {
            break;
        }
    }
    if(count % 2) {
        return false
    }
    else {
        return true;
    }

};
console.log(isOneBitCharacter([1,0,0]))
console.log(isOneBitCharacter([1,1,1,0]))

