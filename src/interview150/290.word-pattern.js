/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let map = new Map()
  let arr = s.split(" ")
  if (pattern.length > arr.length || pattern.length < arr.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], arr[i])
    } else {
      // map[pattern[i]]++
      if (map.get(pattern[i]) !== arr[i]) {
        return false
      }
    }
  }
  let smap = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!smap.has(arr[i])) {
      smap.set(arr[i], pattern[i])
    } else {
      if (smap.get(arr[i]) !== pattern[i]) {
        return false
      }
    }
  }
  return true
};

console.log(wordPattern("abba", "dog constructor constructor dog"))
console.log(wordPattern("abba", "dog cat cat dog"))
// console.log(wordPattern("abba", "dog dog dog dog")) // false