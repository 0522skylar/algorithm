/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] != undefined) {
      map[s[i]]++
    } else {
      map[s[i]] = 1
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] != undefined) {
      map[t[i]]--
      if (map[t[i]] == 0) {
        delete map[t[i]]
      }
    } else {
      return false
    }
  }
  // console.log(map)
  if (JSON.stringify(map) != '{}') {
    return false
  } else {
    return true
  }
};

console.log(isAnagram("anagram", "nagaram"))
