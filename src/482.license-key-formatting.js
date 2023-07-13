/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 licenseKeyFormatting = function(s, k) {
    s = s.toUpperCase().replace(/-/g,'').split('');
    for(let i=s.length  - k;i>0;i-=k){
        s.splice(i,0,'-');
    }
    return s.join('')
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
console.log(licenseKeyFormatting("2-5g-3-J", 2))
console.log(licenseKeyFormatting("2-4A0r7-4k", 4))