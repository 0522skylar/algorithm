/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const daxie = word.toUpperCase();
    if(daxie === word) {
        return true;
    }
    const xiaoxie = word.toLowerCase();
    if(xiaoxie === word) {
        return true;
    }
    if(word.length != 1 ) {
        const fir = word[0].toUpperCase() + word.slice(1).toLowerCase();
        if(fir === word) {
            return true
        }
    }
    return false
};

console.log(detectCapitalUse("FlaG"))