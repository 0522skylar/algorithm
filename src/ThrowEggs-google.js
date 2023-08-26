// 假设arr表示100层楼,每层楼鸡蛋会不会碎,如果arr[i] === 1 表示i层楼的鸡蛋会碎,arr[i] === 0表示第i层楼的鸡蛋不会碎

// 暴力
const throwEggs1 = (arr) => {
  for(let i = 1; i <= 100; i++) {
    if (arr[i] === 1) {
      return i
    }
  }
}

// 常规二分

const throwEggs2 = (arr) => {
  let left = 1
  let right = 100
  let mid = 0
  while(left <= right) {
    mid = Math.floor(left + right) / 2
    if (arr[mid] === 0) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return mid
}

// 均衡切割
const throwEggs3 = (arr) => {
  let count = 0
  // 第一个鸡蛋
  for (let i = 1; i < 10; i++) {
    if (arr[i * 10] === 1) {
      count = i * 10
      break
    }
  }
  // 第二个鸡蛋
  for(let i = count - 1; i >= count - 10; i--) {
    if (arr[i] !== 1) {
      return i
    }
  }
}
