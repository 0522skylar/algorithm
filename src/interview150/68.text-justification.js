/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

const fullJustify = (words, maxWidth) => {
  let ans = []
  let temp = ''
  let curStr = ''
  for (let i = 0; i < words.length; i++) {
    if (temp.length + words[i].length > maxWidth) {
      temp = temp.slice(0, temp.length - 1)
      let spaceArr = temp.split(' ')
      let duoyu = maxWidth - temp.length
      if (duoyu == 0) { // 没有多余
        ans.push(temp.slice(0, maxWidth))
        curStr = ''
        temp = ''
      } else { // 正好平分
        if (duoyu % (spaceArr.length - 1) == 0) {
          curStr += spaceArr.join(' '.repeat(duoyu / (spaceArr.length - 1) + 1))
        } else { // 左多右少
          // console.log(spaceArr, duoyu)
          if (spaceArr.length < 2) {
            curStr = spaceArr[0] + ' '.repeat(maxWidth - spaceArr[0].length)
          } else {
            while (duoyu) {
              for (let j = 0; j < spaceArr.length - 1; j++) {
                spaceArr[j] += ' '
                duoyu--
                if (duoyu == 0) {
                  break
                }
              }
            }
            curStr = spaceArr.join(' ').slice(0, maxWidth)
          }
        }
        ans.push(curStr)
        curStr = ''
        temp = ''
      }

    }
    temp += words[i] + ' '
  }
  ans.push(temp.length > maxWidth ? temp.slice(0, maxWidth) : temp + ' '.repeat(maxWidth - temp.length))
  return ans
}


console.log(fullJustify(["The","important","thing","is","not","to","stop","questioning.","Curiosity","has","its","own","reason","for","existing."], 17))
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
// console.log(fullJustify(["The","important","thing","is","not","to","stop","questioning.","Curiosity","has","its","own","reason","for","existing."], 17))

// ["The     important",
// "thing  is  not to",
// "stop questioning.",
// "Curiosity has its",
// "own   reason  for",
// "existing.        "]