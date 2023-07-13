/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

var numMatchingSubseq = function(s, words) { // TEL
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let item = words[i];
    let count = 0;
    let j = 0;
    while(count < s.length) {
      if(s[count] === item[j]) {
        j++;
      }
      count++;
    }
    if(j === item.length) {
      ans++;
    }
  }
  return ans;
};

var numMatchingSubseq2 = function(s, words) { // TEL
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let item = words[i];
    let count = 0;
    let j = 0;
    // while(count < s.length) {
    //   if(s[count] === item[j]) {
    //     j++;
    //   }
    //   count++;
    // }
    while(j < item.length) {
      count = s.indexOf(item[j], count)
      if(count === -1) {
        break
      } else {
        count ++;
      }
      j++
    }
    if(j === item.length) {
      ans++;
    }
  }
  return ans;
};

const numMatchingSubseq1 = (s, word) => {
  let n = 0;
  for(let i = 0; i < word.length; i++) {
    let cur = word[i]
    let index = 0;
    for(let j = 0; j < cur.length; j++) {
      index = s.indexOf(cur.charAt(j), index);
      // 从第二个参数索引后面开始找第一个参数字符
      if(index != -1) {
        index += 1;
      } else {
        break
       }
       if(j === cur.length - 1) {
        n++
       }
    }
  }
  return n;
}



console.log(numMatchingSubseq2("abcde", ["a","bb","acd","ace"]))

console.log(numMatchingSubseq2("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]))