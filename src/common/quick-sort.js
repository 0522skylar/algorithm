const quickSort = (arr) => {

  const sortCur = (left, right) => {
    let mid = arr[Math.floor((left + right) / 2)]
    let i = left
    let j = right
    while(i < j) {
      while(arr[i] < mid) {
        i++
      }
      while(arr[j] > mid) {
        j--
      }
      if (i <= j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
      }
    }
    if (left< j) {
      sortCur(left, j)
    }
    if (i < right) {
      sortCur(i, right)
    }
  }
  sortCur(0, arr.length - 1)
  return arr
}

console.log(quickSort([4,2,1,4,5,7]))