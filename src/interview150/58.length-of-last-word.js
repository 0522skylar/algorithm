/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.split(' ');
  // console.log(arr)
  while (arr[arr.length - 1] === '') {
    arr.pop();
  }
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))