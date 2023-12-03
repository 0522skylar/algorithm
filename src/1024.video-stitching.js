/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
  let maxLen = new Array(101).fill(0)
  for (let i = 0; i < clips.length; i++) {
    let item = clips[i]
    for (let j = item[0]; j <= item[1]; j++) {
      maxLen[j] = Math.max(maxLen[j], item[1])
    }
  }

  let cur = 0
  let ans = 0
  // console.log(maxLen)
  while(cur < time) {
    if (maxLen[cur] === cur) {
      return -1
    }
    cur = maxLen[cur]
    ans++
  }
  return ans;
};
console.log(videoStitching([[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9))