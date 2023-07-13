/**
 * @param {number[]} ages
 * @return {number}
 */
function numFriendRequests3(ages) {
  let count = 0;
  for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
      if (i != j && ages[j] > 0.5 * ages[i] + 7 && ages[j] <= ages[i] && !(ages[j] > 100 && ages[i] < 100)) {
        count++;
      }
    }
  }
  return count;
}

function numFriendRequests(ages) {
  let count = 0;
  const ageCounts = new Array(121).fill(0); // 年龄计数数组，下标对应年龄，值对应该年龄的人数
  for (const age of ages) {
    ageCounts[age]++;
  }
  for (let i = 1; i <= 120; i++) {
    const countI = ageCounts[i]; // i 年龄的人数
    if (countI === 0) continue; // 如果没有该年龄的人，则不需要考虑
    for (let j = 1; j <= 120; j++) {
      if (i * 0.5 + 7 >= j) continue; // 第一个限制条件
      if (i < j) continue; // 第二个限制条件
      if (i < 100 && j > 100) continue; // 第三个限制条件
      count += countI * ageCounts[j];
      if (i === j) count -= countI; // 自己不能向自己发送好友请求
    }
  }
  return count;
}

console.log(numFriendRequests([20,30,100,110,120]))
console.log(numFriendRequests([16,16]))
console.log(numFriendRequests([16,17,18]))