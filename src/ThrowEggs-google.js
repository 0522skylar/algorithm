// 假设arr表示100层楼,每层楼鸡蛋会不会碎,如果arr[i] === 1 表示i层楼的鸡蛋会碎,arr[i] === 0表示第i层楼的鸡蛋不会碎

// 暴力
const throwEggs1 = (arr) => {
  for(let i = 1; i <= 100; i++) {
    if (arr[i] === 1) {
      return i
    }
  }
}

