/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let arr = []
  for (let i = 0; i < tokens.length; i++) {
    console.log(arr)
    if (tokens[i] === '+') {
      const a = arr.pop()
      const b = arr.pop()
      let sum = Number(a) + Number(b)
      arr.push(sum)
    } else if (tokens[i] === '-') {
      const a = arr.pop()
      const b = arr.pop()
      let sum = Number(b) - Number(a)
      arr.push(sum)
    } else if (tokens[i] === '*') {
      const a = arr.pop()
      const b = arr.pop()
      let sum = Number(a) * Number(b)
      arr.push(sum)
    } else if (tokens[i] === '/') {
      const a = arr.pop()
      const b = arr.pop()
      let sum = parseInt(Number(b) / Number(a))
      arr.push(sum)
    } else {
      arr.push(tokens[i])
    }
  }
  return arr
};
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
// console.log(evalRPN(["2","1","+","3","*"]))
// console.log(evalRPN(["4","13","5","/","+"]))