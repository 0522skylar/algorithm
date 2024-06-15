/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  map.set(strs[0].split("").sort().join(''), [strs[0]])
  // console.log(map)
  for (let i = 1; i < strs.length; i++) {
    let curStrArr = strs[i].split("").sort()

    let flagStr = curStrArr.join('')
    let flagIn = false
    // console.log(curStrArr)
    for (let item of map) {
      // console.log(item, flagStr)
      
      if (item[0] === flagStr) {
        // console.log(item[1], strs[i])
        flagIn = true
        map.set(item[0], [...item[1], strs[i]])
      }
    }
    if (!flagIn) {
      map.set(flagStr, [strs[i]])
    }
    // console.log(map)
  }
  let ans = []
  for (let item of map) {
    ans.push(item[1])
  }
  return ans
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// console.log(groupAnagrams(["eat", "tea",  "ate"]))