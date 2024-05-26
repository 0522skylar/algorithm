/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};


const strStr1 = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const temp = haystack.slice(i, needle.length + i)
      if (temp === needle) {
        return i
      }
    }
  }
  return -1
}

console.log(strStr1("sadbutsad", "sad"))
console.log(strStr1("leetcode", "leeto"))