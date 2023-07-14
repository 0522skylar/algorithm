/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let ans = []
  let str1Arr = s1.split(' ')
  let str2Arr = s2.split(' ')
  for(let i = 0; i < str1Arr.length; i++) {
    if (str2Arr.indexOf(str1Arr[i]) === -1 && str1Arr.lastIndexOf(str1Arr[i]) === str1Arr.indexOf(str1Arr[i])) {
      ans.push(str1Arr[i])
    }
  }
  for(let j = 0; j < str2Arr.length; j++) {
    if (str1Arr.indexOf(str2Arr[j]) === -1 && str2Arr.lastIndexOf(str2Arr[j]) === str2Arr.indexOf(str2Arr[j])) {
      ans.push(str2Arr[j])
    }
  }
  return ans;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))
console.log(uncommonFromSentences("apple apple",
"banana"))