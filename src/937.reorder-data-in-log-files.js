/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let ans = []
  let char = []
  for(let i = 0; i < logs.length; i++) {
    const flag = logs[i].split(' ')[0]
    const other = logs[i].slice(flag.length)
    if (other[1] >= 'a' && other[1] <= 'z') {
      // console.log(other)
      char.push(logs[i])
    } else {
      ans.push(logs[i])
    }
  }

  char.sort((a, b) => {
    const flag = a.split(' ')[0]
    const other = a.slice(flag.length)
    
    const flag1 = b.split(' ')[0]
    const other1 = b.slice(flag1.length)

    // console.log(flag, '---', flag1, other, other1)
    if (other === other1) {
      return flag.localeCompare(flag1)
    } else {
      return other.localeCompare(other1)
    }
  })

  // console.log(char)
  ans.unshift(...char)
  return ans
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))