/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  let ans = ''

  let yuan = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  sentence = sentence.split(' ');
  for(let i = 0; i < sentence.length; i++) {
    let fir = sentence[i][0]
    let flag = ''
    let item = sentence[i]
    if(yuan.indexOf(fir) != -1) {
      flag += item + 'ma'
    } else {
      flag += item.slice(1) + item[0] + 'ma'
    }
    // console.log(flag.length + i + 1)
    flag = flag.padEnd(flag.length + i + 1, 'a')
    ans += flag + ' '
  }

  return ans.slice(0,-1) // 去除最后一个字符
};

console.log(toGoatLatin("I speak Goat Latin"))
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))