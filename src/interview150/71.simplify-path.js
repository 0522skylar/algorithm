/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let ans  = ''
  let arr = path.split('/')
  let stask = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length != 0) {
      if (arr[i] === '..') {
        stask.pop()
        continue
      }
      if (arr[i] === '.') {
        continue
      }
      stask.push(arr[i])
    }
  }
  // console.log(arr)
  for (let i = 0; i < stask.length; i++) {
    ans += ('/' + stask[i])
  }
  return ans.length == 0 ? '/' : ans
};

console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/home/"))
console.log(simplifyPath( "/../"))
console.log(simplifyPath( "/home//foo/"))