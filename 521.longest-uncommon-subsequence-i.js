/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    let lena = a.length;
    let lenb = b.length;
    if(lena === lenb && a === b) {
        return -1
    }
    if(lena > lenb) {
        return lena
    }
    else {
        return lenb
    }
};