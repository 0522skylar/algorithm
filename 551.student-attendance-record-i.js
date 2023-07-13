/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0;
    let late = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'A') {
            absent++;
        }
        if(s[i] === 'L' && i+1 < s.length && i+2 < s.length) {
            if(s[i+1] === 'L' && s[i+2] === 'L') {
                late++;
            }
        }
    }
    if(late != 0 || absent >= 2) {
        return false
    }
    return true;
};