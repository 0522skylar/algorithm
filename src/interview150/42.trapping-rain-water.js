/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) { // TEL
  let leftVal = 0
  let rightVal = 2
  for (let j = 3; j < height.length; j++) {
    if (height[j] > height[rightVal]) {
      rightVal = j
    }
  }
  let ans = 0
  for (let i = 1; i < height.length - 1; i++) {
    if (height[i] > height[leftVal]) {
      leftVal = i
    }
    if (rightVal <= i) {
      for (let j = i + 1; j < height.length; j++) {
        if (height[j] > height[rightVal]) {
          rightVal = j
        }
      }
      if (rightVal <= i) {
        rightVal++
      }
    }
    const temp = Math.min(height[leftVal], height[rightVal])
    // console.log(height[leftVal], height[rightVal], temp - height[i])

    if (temp < height[i]) {
      continue
    }
    ans += temp - height[i]
  }
  return ans;
};

const trap1 = (height) => {
  let ans = 0
  let left = 0
  let right = height.length - 1
  let leftMax = 0
  let rightMax = 0
  while(left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      ans += leftMax - height[left]
      left++
    } else {
      ans += rightMax - height[right]
      right--
    }
  }
  return ans
}

console.log(trap1([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap1([4,2,0,3,2,5])) // 9

console.log(trap1([5,5,1,7,1,1,5,2,7,6])) // 23