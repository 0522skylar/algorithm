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




/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles1 = function(logs) {
  logs = logs.map(log => log.split(' '))
  let nums = [], chars = []
  for (let log of logs) {
      if (!isNaN(Number(log[1]))) {
          nums.push(log.join(' '))
      } else {
          chars.push(log)
      }
  }
  chars.sort((a, b) => {
      const aStr = a.slice(1).join(' '), bStr = b.slice(1).join(' ')

      console.log(aStr,'----', bStr)
      if (aStr !== bStr) {
          return aStr > bStr ? 1 : -1
      } else {
          return a[0] > b[0] ? 1 : -1
      }
  })
  chars = chars.map(char => char.join(' '))
  return [...chars, ...nums]
};

// 作者：月亮
// 链接：https://leetcode.cn/problems/reorder-data-in-log-files/solutions/2339721/js-zi-dian-zhi-pai-xu-by-yue-liang-ab-xbb4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(reorderLogFiles1(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))
