/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // nums.sort((a, b) => a - b)
  // qSort(nums, 0, nums.length - 1)
  // insertSort(nums)
  // shellSort(nums)
  // bucketSort(nums)
  // countSort(nums)
  // bubblSort(nums)
  heapSort(nums)
  return nums
};

// 快速排序
const qSort = (arr, s, e) => {
  let left = s;
  let right = e;
  if (left < right) {
    let temp = arr[left]
    while(left < right) {
      while(left < right && arr[right] >= temp) {
        right--
      }
      if (left < right) {
        arr[left] = arr[right]
      }
      while(left < right && arr[left] < temp) {
        left++
      }
      if (left < right) {
        arr[right] = arr[left]
      }
    }
    arr[left] = temp
    qSort(arr, s, left)
    qSort(arr, left + 1, e)
  }
}

// 选择排序
const selectSort = (arr) => {
  let min = 0
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        min = j
      }
    }
    if (min != i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
}

/**
 *
 * 插入排序：数列前面部分看为有序，依次将后面的无序数列元素插入到前面的有序数列中，初始状态有序数列仅有一个元素，即首元素。在将无序数列元素插入有序数列的过程中，采用了逆序遍历有序数列，相较于顺序遍历会稍显繁琐，但当数列本身已近排序状态效率会更高。
 *
 * 时间复杂度：O(N2) 　　稳定性：稳定
 * @param arr
 */
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let res = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (res < arr[j]) {
        arr[j + 1] = arr[j]
        arr[j] = res
      } else {
        break
      }
    }
  }
}
 /**
 * 希尔排序 - 插入排序的改进版。为了减少数据的移动次数，在初始序列较大时取较大的步长，通常取序列长度的一半，此时只有两个元素比较，交换一次；之后步长依次减半直至步长为1，即为插入排序，由于此时序列已接近有序，故插入元素时数据移动的次数会相对较少，效率得到了提高。
 *
 * 时间复杂度：通常认为是O(N3/2) ，未验证　　稳定性：不稳定
 * @param arr
 */


const shellSort = (arr) => {
  let d = arr.length >> 1
  while(d >= 1) {
    for (let i = d; i < arr.length; i++) {
      let res = arr[i]
      for (let j = i - d; j >= 0; j -= d) {
        if (res < arr[j]) {
          arr[j + d] = arr[j]
          arr[j] = res
        } else {
          break
        }
      }
    }
    d >>= 1
  }
}

/**
 * 桶排序 - 实现线性排序，但当元素间值得大小有较大差距时会带来内存空间的较大浪费。首先，找出待排序列中得最大元素max，申请内存大小为max + 1的桶（数组）并初始化为0；然后，遍历排序数列，并依次将每个元素作为下标的桶元素值自增1；
 * 最后，遍历桶元素，并依次将值非0的元素下标值载入排序数列（桶元素>1表明有值大小相等的元素，此时依次将他们载入排序数列），遍历完成，排序数列便为有序数列。
 *
 * 时间复杂度：O(x*N) 　　稳定性：稳定
 * @param arr
 */
const bucketSort = (arr) => {
  let bk = new Array(50000 * 2 + 1).fill(0)
  for (let i = 0; i < arr.length; i++) {
    bk[arr[i] + 50000] += 1;
  }
  let ar = 0
  for (let i = 0; i < bk.length; i++) {
    for (let j = bk[i]; j > 0; j--) {
      arr[ar++] = i - 50000
    }
  }
}


/**
 * 基数排序 - 桶排序的改进版，桶的大小固定为10，减少了内存空间的开销。首先，找出待排序列中得最大元素max，并依次按max的低位到高位对所有元素排序；
 * 桶元素10个元素的大小即为待排序数列元素对应数值为相等元素的个数，即每次遍历待排序数列，桶将其按对应数值位大小分为了10个层级，桶内元素值得和为待排序数列元素个数。
 * @param arr
 */

const countSort = (arr) => {
  let bk = new Array(19).fill(0)
  let max = Number.MIN_VALUE
  for (let i = 0; i < arr.length; i++) {
    if (max < Math.abs(arr[i])) {
      max = arr[i]
    }
  }
  if (max < 0) {
    max = -max;
  }
  max = max.toString().length
  let bd = new Array(19).fill(0).map(() => new Array(arr.length).fill(0))
  for (let k = 0; k < max; k++) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i] / (Math.pow(10, k) % 10)
      bd[val + 9][bk[val + 9] ++] = arr[i]
    }
    let fl = 0
    for (let l = 0; l < 19; l++) {
      if (bk[l] != 0) {
        for (let s = 0; s < bk[l]; s++) {
          arr[fl++] = bd[l][s]
        }
      }
    }
    bk = new Array(19).fill(0)
    fl = 0
  }
}

/**
 * 时间复杂度：平均 O(n²)、最好 O(n²)、最坏 O(n²)
空间复杂度：O(1)
In-place 内排序
稳定
 * @param {*} arr 
 * @returns 
 */
const bubblSort = (arr) => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}


/**
 * 时间复杂度：平均 O(nlogN)、最好 O(nlogN)、最坏 O(nlogN)
空间复杂度：O(1)
In-place 内排序
不稳定
 * @param {*} arr 
 * @returns 
 */
const heapSort = (arr) => {
  function buildMaxHeap(nums) {
    const n = nums.length;
    for (let i = n >> 1; i >= 0; i--) {
      maxHeapify(nums, i, n);
    }
  }
  function maxHeapify(nums, index, heapSize) {
    let largest = index;
    let l = index * 2 + 1;
    let r = l + 1;
    if (l < heapSize && nums[l] > nums[largest]) {
      largest = l;
    }
    if (r < heapSize && nums[r] > nums[largest]) {
      largest = r;
    }
    if (largest !== index) {
      [nums[largest], nums[index]] = [nums[index], nums[largest]];
      maxHeapify(nums, largest, heapSize);
    }
  }

  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeapify(arr, 0, i);
  }
  return arr;
}
console.log(sortArray([4,2,1,5,6,2]))