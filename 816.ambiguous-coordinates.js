const {
  ConsoleMessage
} = require("puppeteer");

/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (S) {
  S = S.slice(1, -1); // 去除括号
  const res = [];
  for (let i = 1; i < S.length; i++) { // i 是小数点在字符串中的位置
    const lefts = getNums(S.slice(0, i)); // 获取小数点左侧的所有数字
    const rights = getNums(S.slice(i)); // 获取小数点右侧的所有数字

    // console.log(lefts, rights)
    for (const left of lefts) {
      for (const right of rights) {
        res.push(`(${left}, ${right})`)
      }
    }
  }
  return res;
};

// 获取一个字符串能表示的所有数字
function getNums(str) {
  // 如果只有一个数,不需要加小数点
  if (str.length == 1) {
    return [str];
  }
  // 首尾都是0,不合法
  if (str[0] === '0' && str[str.length - 1] === '0') {
    return []
  }
  // 最后一个是0,则不能以0开头
  if (str[str.length - 1] === '0') {
    return [str]
  }
  // 如果有前导零,只能以0.开头
  if (str[0] === '0') {
    return ['0.' + str.slice(1)]
  }
  // 不加小数点
  const arr = [str];
  // 加小数点
  for (let i = 1; i < str.length; i++) {
    const num = str.slice(0, i) + '.' + str.slice(i)
    if (Number(num) + '' === num) {
      arr.push(num);
    }
  }
  return arr;
}

console.log(ambiguousCoordinates("(123)")) // [ '(1, 23)', '(1, 2.3)', '(12, 3)', '(1.2, 3)' ]
console.log(ambiguousCoordinates("(00011)")) // [ '(0., 0.011)', '(0.001, 1)' ]
console.log(ambiguousCoordinates("(0123)"))
// [
//   '(0., 123)',
//   '(0., 1.23)',
//   '(0., 12.3)',
//   '(0.1, 23)',
//   '(0.1, 2.3)',
//   '(0.12, 3)'
// ]


console.log(ambiguousCoordinates("(100)")) //[ '(10, 0)' ]

console.log(ambiguousCoordinates("(0010)"))