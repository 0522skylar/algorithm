/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let list = []
  // for(let i = 0; i < pushed.length; i++) {

  // }
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

// console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))
// console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]))
console.log(validateStackSequences([2,1,0], [1,2,0]))