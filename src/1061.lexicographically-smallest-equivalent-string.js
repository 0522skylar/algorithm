/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  let arr = []
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      let f = false
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].has(s1[i])) {
          f = true
          break
        }
      }
      if (!f) {
        arr.push(new Set(s1[i]))
      }
    } else {
      let f = false
      let temp = -1
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].has(s1[i])) {
          if (!f) {
            f = true
            arr[j].add(s2[i])
            temp = j
            continue
          } else {
            arr[j] = new Set([...arr[j], ...arr[temp]])
            arr[temp] = new Set()
          }
        }
        if (arr[j].has(s2[i])) {
          if (!f) {
            f = true
            temp = j
            arr[j].add(s1[i])
            continue
          } else {
            arr[j] = new Set([...arr[j], ...arr[temp]])
            arr[temp] = new Set()
          }
        }
      }
      if (!f) {
        arr.push(new Set([s1[i], s2[i]]))
      }
    }
  }

  let strArr = []
  for (let i = 0; i < arr.length; i++) {
    strArr.push([...arr[i]].sort())
  }
  let ans = ''
  for (let i = 0; i < baseStr.length; i++) {
    let f = false
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j].indexOf(baseStr[i]) != -1) {
        ans += strArr[j][0]
        f = true
        break
      }
    }
    if (!f) {
      ans += baseStr[i]
    }
  }
  // console.log(arr)
  return ans
};

console.log(smallestEquivalentString("parker", 'morris', 'parser'))
console.log(smallestEquivalentString("leetcode", 'programs', 'sourcecode'))
console.log(smallestEquivalentString("cgokcgerolkgksgbhgmaaealacnsshofjinidiigbjerdnkolc", "rjjlkbmnprkslilqmbnlasardrossiogrcboomrbcmgmglsrsj", "bxbwjlbdazfejdsaacsjgrlxqhiddwaeguxhqoupicyzfeupcn"))
console.log(smallestEquivalentString('hello', 'world', 'hold'))