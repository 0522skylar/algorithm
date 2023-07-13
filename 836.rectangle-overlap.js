/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // let ans = false
  // const [x1,y1,x2,y2] = rec1
  // const [a1,b1,a2,b2] = rec2

  // x1, y1
  // x1, y2
  // x2, y1
  // x2, y2


  // a1,b1
  // a1,b2
  // a2,b1
  // a2,b2


  return !(rec1[2] <= rec2[0] || rec2[2] <= rec1[0] || rec1[3] <= rec2[1] || rec2[3] <= rec1[1]);
};


function find24(nums) {
  /*
  Input: nums - Array, 由4个数字组成的数组
  Output: boolean, 是否可以使用加减乘除操作后得到 24
  */
  if (nums.length == 1) {
    return Math.abs(nums[0] - 24) < 1e-6;  // 计算结果要用到浮点数，需要考虑精度问题
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        // 所有数字可以分为两组，一组为 nums[i]，一组为其他数字
        let otherNums = nums.filter((n, index) => index != i && index != j);
        for (let op of ["+", "-", "*", "/"]) {
          // 对所有可能的算数运算进行尝试
          if ((op == "+" || op == "*") && (j < i)) {
            continue;  // 避免重复运算
          }
          if (op == "+") {
            res = nums[i] + nums[j];
          } else if (op == "-") {
            res = nums[i] - nums[j];
          } else if (op == "*") {
            res = nums[i] * nums[j];
          } else if (op == "/") {
            if (Math.abs(nums[j]) < 1e-6) {
              continue;
            }
            res = nums[i] / nums[j];
          }
          if (find24([...otherNums, res])) {
            return true;
          }
        }
      }
    }
  }
  return false;
}


function get24(nums) {
  let n = nums.length;
  if (n === 1) {
    // 如果只剩一个数字，返回该数字以及与24的差值
    return [`${nums[0]}`, Math.abs(nums[0] - 24)];
  }
  let ans = null; // 结果表达式
  let minDiff = Infinity; // 最小差值
  // 对于n个数字，从中任取两个数字进行组合
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let numsCopy = [];
      for (let k = 0; k < n; k++) {
        if (k !== i && k !== j) {
          numsCopy.push(nums[k]);
        }
      }
      // 将两个数字的加减乘除运算结果插入剩余的数字中
      for (let op of ["+", "-", "*", "/"]) {
        if (op === "+" || op === "*") {
          numsCopy.push(eval(nums[i] + op + nums[j]));
          let [exp, diff] = get24(numsCopy);
          if (diff < minDiff) {
            minDiff = diff;
            ans = `(${nums[i]}${op}${nums[j]})${exp}`;
          }
          numsCopy.pop(); // 避免对原数组进行影响
        } else if (op === "-") {
          numsCopy.push(eval(nums[i] + op + nums[j]));
          numsCopy.push(eval(nums[j] + op + nums[i]));
          for (let k = 0; k < 2; k++) {
            let [exp, diff] = get24(numsCopy);
            if (diff < minDiff) {
              minDiff = diff;
              if (k === 0) {
                ans = `(${nums[i]}${op}${nums[j]})${exp}`;
              } else {
                ans = `(${nums[j]}${op}${nums[i]})${exp}`;
              }
            }
            numsCopy.pop();
          }
          numsCopy.pop(); // 避免对原数组进行影响
        } else {
          if (nums[j] !== 0) {
            numsCopy.push(eval(nums[i] + op + nums[j]));
            let [exp, diff] = get24(numsCopy);
            if (diff < minDiff) {
              minDiff = diff;
              ans = `(${nums[i]}${op}${nums[j]})${exp}`;
            }
            numsCopy.pop();
          }
          if (nums[i] !== 0) {
            numsCopy.push(eval(nums[j] + op + nums[i]));
            let [exp, diff] = get24(numsCopy);
            if (diff < minDiff) {
              minDiff = diff;
              ans = `(${nums[j]}${op}${nums[i]})${exp}`;
            }
            numsCopy.pop();
          }
        }
      }
    }
  }
  // 返回最终的表达式和对24点的差值
  return [ans, minDiff];
}

console.log(get24([4, 6, 8, 1])); // ["((8-6)*4)+1", 0]
console.log(get24([1, 2, 3, 4])); // ["(4*(2+1))", 0]
console.log(get24([2, 2, 2, 2])); // ["(2*(2*(2+2)))", 0]
console.log(get24([1, 2, 3, 5])); // null

console.log(find24([1,2,3,4]))
console.log(find24([2,2,2,2]))
console.log(find24([4,6,8,1]))