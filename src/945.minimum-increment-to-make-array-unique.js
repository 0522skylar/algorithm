/**
 * @param {number[]} nums
 * @return {number}
 */
// TTL exceed time limit
var minIncrementForUnique1 = function(nums) {
  let ans = 0
  let arr = new Array(100000).fill(0)
  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]]++
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] != 1) {
      for(let j = 2; j <= arr[i] ; j++) {
        let index = i + 1
        ans++
        while(arr[index] != 0) {
          index ++
          ans++
        }
        arr[index]++
        // console.log(index, 11)
      }
      
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  let ans = 0
  let arr = new Array(500001).fill(0)
  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]]++
  }
  for(let i = 0; i <500001; i++) {
    if(arr[i] <= 1) {
      continue
    }
    ans += arr[i] - 1
    arr[i+1] += arr[i] - 1
    arr[i] = 1
  }
  return ans;
}


var minIncrementForUnique = function(A) {
  A.sort((a,b) => a-b);
  var count=0;
  for(var i=1;i<A.length;i++){
      if(A[i]<=A[i-1]){
          var pre = A[i];
          A[i]=A[i-1]+1;
          count += A[i]-pre; 
      }
  }
  return count;
};

// 作者：阿巴阿巴
// 链接：https://leetcode.cn/problems/minimum-increment-to-make-array-unique/solutions/1673860/javascriptban-jie-ti-si-lu-by-ityou-o-r0cm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(minIncrementForUnique([1,2,2]))
console.log(minIncrementForUnique([3,2,1,2,1,7]))
console.log(minIncrementForUnique([2,2,2,1]))