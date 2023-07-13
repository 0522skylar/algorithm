/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) { // s1 = 'abcde'   s2 = 'ab'  =>  false
        return false;
    }
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    for(let i = 0; i < s1.length; i++) {
        // 'a'的ASCII是97
        arr1[s1[i].charCodeAt() - 97] ++;
        arr2[s2[i].charCodeAt() - 97] ++;
    }
    for(let i = s1.length; i < s2.length; i++) {
        if(arr1.join('') === arr2.join('')) { // 如果出现26个字符的频率一致,则返回true
            return true;
        }
        // 移动窗口,确保arr2与arr1中字符长度一致
        arr2[s2[i - s1.length].charCodeAt() - 97] --; // arr2的第一个字符的频率减一
        arr2[s2[i].charCodeAt() - 97] ++;// arr2的新增下一个字符的频率
    }

    return arr1.join('') === arr2.join('')
};

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))