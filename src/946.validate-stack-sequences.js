/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let list = []
  while(pushed.length != 0) {
    let item = pushed.shift()
    list.push(item)

    while( list.length> 0 && list[list.length - 1] === popped[0]) {
      list.pop()
      popped.shift()
    }
  }
  return list.reverse().join('') === popped.join('')
};


var validateStackSequences = function(pushed, popped) {
  const stack = [];
  const n = pushed.length;
  for (let i = 0, j = 0; i < n; i++) {
      stack.push(pushed[i]);
      while (stack.length && stack[stack.length - 1] == popped[j]) {
          stack.pop();
          j++;
      }
  }
  return stack.length === 0;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/validate-stack-sequences/solutions/1785639/yan-zheng-zhan-xu-lie-by-leetcode-soluti-cql0/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))
// console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]))
console.log(validateStackSequences([2,1,0], [1,2,0]))