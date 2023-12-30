/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const swap = (barcodes, i, j) => {
    let temp = barcodes[i]
    barcodes[i] = barcodes[j]
    barcodes[j] = temp
  }
  for (let i = 1; i < barcodes.length; i++) {
    if (barcodes[i] == barcodes[i-1]) {
      for (let j = i; j < barcodes.length; j++) {
        if (barcodes[j] != barcodes[i]) {
          swap(barcodes, i, j)
          break
        }
      }
    }
  }

  for (let i = barcodes.length - 2; i >= 0; i--) {
    if (barcodes[i] == barcodes[i+1]) {
      for (let j = i; j >= 0; j--) {
        if (barcodes[j] != barcodes[i]) {
          swap(barcodes, i, j)
          break
        }
      }
    }
  }
  return barcodes
};

// console.log(rearrangeBarcodes([1,1,2]))
// console.log(rearrangeBarcodes([1,2,2]))
// console.log(rearrangeBarcodes([2,2,1,3]))
console.log(rearrangeBarcodes([2,2,2,1,5]))