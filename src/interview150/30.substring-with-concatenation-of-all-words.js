/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring1 = function(s, words) { // TEL
  let ans = []
  let wlen = words.length * words[0].length
  let alen = s.length
  if (wlen > alen) {
    return ans
  }
  const pidui = (str) => {
    let arr = words.concat()
    let lens = arr[0].length
    while(arr.length) {
      let ss = str.slice(0, lens)
      let index = arr.indexOf(ss)
      if (index === -1) {
        break
      }
      arr.splice(index, 1)
      str = str.slice(lens, str.length)
    }
    return arr.length === 0 ? true : false
  }
  // console.log(pidui("foobarthe"))
  for (let i = 0; i < alen; i++) {
    if (alen - i < wlen) {
      break
    }
    firs = s.slice(i,  i + words[0].length)
    // console.log(firs, i, pidui(s.slice(i, i + wlen)))
    if (words.indexOf(firs) != -1 && pidui(s.slice(i, i + wlen))) {
      ans.push(i)
      // i += words[0].length - 1
    }
  }
  return ans
};


const findSubstring = (s, words) => { //
  let res = []
  const m = words.length
  let n = words[0].length
  let sl = s.length
  for (let i = 0; i < n; i++) {
    if (i + m * n > sl) {
      break
    }
    const diff = new Map()
    for (let j = 0; j < m; j++) {
      const word = s.substring(i + j * n, i + (j + 1) * n)
      diff.set(word, (diff.get(word) || 0) + 1)
    }
    
    
    for (const word of words) {
      diff.set(word, (diff.get(word) || 0 ) - 1)
      if (diff.get(word) == 0) {
        diff.delete(word)
      }
    }
    // console.log(diff, 'strar1')
    for (let start = i; start < sl - m * n + 1; start += n) {
      if (start !== i) {
        let word = s.substring(start + (m -1) * n, start + m * n )
        diff.set(word, (diff.get(word) || 0) + 1)
        if (diff.get(word) === 0) {
          diff.delete(word)
        }
        // console.log(word, 1)
        word = s.substring(start - n, start)
        diff.set(word, (diff.get(word) || 0) - 1)
        if (diff.get(word) === 0) {
          diff.delete(word)
        }
        // console.log(word, 2)
      }
      if (diff.size == 0) {
        res.push(start)
      }
    }
  }
  return res
}

console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))
// console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])) // 6,9,12

console.log(findSubstring("aaaaaaaaaaaaaa",['aa', 'aa']))