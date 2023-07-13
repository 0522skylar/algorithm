/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    for(let i = 0; i < arr.length; i++) {
        let str = arr[i].split('');
        str = str.reverse().join('');
        arr[i] = str;
    }
    // console.log(arr)
    return arr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("God Ding"))