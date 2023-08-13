/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
  let arr = new Array(26).fill(0) // words2中的字符个数
  words2.forEach(item => {
    const temp = new Array(26).fill(0)
    for (let c of item) {
      const index = c.charCodeAt() - 97
      if (temp[index] ++ === arr[index]) { // 单个字符串中存在重复字符
        arr[index] ++
      }
    }
  })

  console.log(arr)
  return words1.filter(w => {
    const temp = arr.slice()
    for (let c of w) {
      const index = c.charCodeAt() - 97
      if (temp[index] > 0) {
        temp[index]--
      }
    }

    return temp.every(cnt => cnt === 0)
  })
};

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]))
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","l"]))
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","oo"]))
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lo","eo"]))
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["ec","oc", "ceo"]))


/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsetsAns = function(A, B) {
  let check = new Array(26).fill(0),
      res = [];
  for(let i = 0; i < B.length; i++){
      let temp = new Array(26).fill(0);
      for(let j = 0; j < B[i].length; j++){
          temp[B[i][j].charCodeAt() - 97]++;
      }
      for(let j = 0; j < 26; j++){
          check[j] = Math.max(check[j], temp[j]);
      }
  }
  for(let i = 0; i < A.length; i++){
      let temp = new Array(26).fill(0),
          isRight = true;
      for(let j = 0; j < A[i].length; j++){
          temp[A[i][j].charCodeAt() - 97]++;
      }
      for(let j = 0; j < 26; j++){
          if(temp[j] < check[j]){
              isRight = false;
              break ;
          }
      }
      isRight && res.push(A[i]);
  }
  return res;
};
