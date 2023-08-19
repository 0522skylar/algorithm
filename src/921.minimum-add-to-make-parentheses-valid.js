/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    // if (s[i] === '(' && arr.indexOf(')') != -1) {
    //   let index = arr.indexOf(')')
    //   arr.splice(index, 1)
    // } else 
    if(s[i] === ')' && arr.indexOf('(') != -1) {
      let index = arr.indexOf('(')
      arr.splice(index, 1)
    } else {
      arr.push(s[i])
    }
    console.log(arr)
  }
  return arr.length
};

// console.log(minAddToMakeValid("())"))
// console.log(minAddToMakeValid("((("))


var sortArrayByParityII = function(nums) {
  const n  = nums.length;
  const ans = new Array(n);
  let i = 0;
  for (const x of nums) {
      if (!(x & 1)) {
          ans[i] = x;
          i += 2;
      } 
  }

  i = 1;
  for (const x of nums) {
      if (x & 1) {
          ans[i] = x;
          i += 2;
      }
  }

  return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/sort-array-by-parity-ii/solutions/481450/an-qi-ou-pai-xu-shu-zu-ii-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(minAddToMakeValid("()))((")) // 4