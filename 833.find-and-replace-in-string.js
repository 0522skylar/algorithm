/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  let arr = s.split('')
  for(let i = 0; i < sources.length; i++) {
    let index = s.indexOf(sources[i], 0)
    while(index > -1) {
      if(index === indices[i]) {
        let temp = new Array(sources[i].length).fill('')
        temp[0] = targets[i]
        arr.splice(index, sources[i].length, ...temp)
      }
      index = s.indexOf(s, index + 1)
    }
  }

  return arr.join('')
};

// console.log(findReplaceString("abcd", [0,2], ["a","cd"], ["eee","ffff"]))

// console.log(findReplaceString("vmokgggqzp",[3,5,1],["kg","ggq","mo"],["s","so","bfr"])) // "vbfrssozp"
//vbfrsgsoz

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  let result = S.split(''); //转换为数组
  const l = indexes.length;
  for (let j = 0; j < l; j++) {
    let s = sources[j]; // 将需要替换的数组元素赋值给s
    let i = S.indexOf(s, 0); // 从头开始查找需要替换的字符所在的位置
    while (i > -1) {
      if (i === indexes[j]) { // 查到的位置是否和indexes中位置相符合
        let temp = new Array(s.length).fill(' ');
        temp[0] = targets[j];
        // ...temp 展开数组 空白字符也会存在
        result.splice(i, s.length, ...temp); // 在数组中删除对应索引元素(sources中元素) 新增
        break
      }
      i = S.indexOf(s, i+1);
    }
  }
    // 数组转换为字符 再转换为数组(空白字符所处位置变成逗号分隔) 再转换为字符
  return result.join('').split(' ').join('');
};



console.log(findReplaceString("abcd",
[0, 2],
["a", "cd"],
["eee", "ffff"]))