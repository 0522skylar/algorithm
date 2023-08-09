/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.map = new Map;
  this.times = times.concat()
  let count = []
  for (let i = 0; i < persons.length; i++) {
    count.push(persons[i])
    this.map.set(times[i], count.concat())
    // count = [...count]
  }
};

/** 
 *  @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  for (let i = 1; i < this.times.length; i++) {
    if (t < this.times[i] && t >= this.times[i-1]) {
      let ans = this.map.get(this.times[i-1])
    //   console.log(ans)
      return ans[ans.length - 1]
    }
  }
  return 0;
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

var TopVotedCandidate = function(persons, times) {
  this.tops = [];
  this.voteCounts = new Map();
  this.voteCounts.set(-1, -1);
  this.times = times;
  let top = -1;
  for (let i = 0; i < persons.length; ++i) {
      const p = persons[i];
      if (!this.voteCounts.has(p)) {
          this.voteCounts.set(p, 0);
      } else {
          this.voteCounts.set(p, this.voteCounts.get(p) + 1);
      }
      if (this.voteCounts.get(p) >= this.voteCounts.get(top)) {
          top = p;
      }
      this.tops.push(top);
  }
};

TopVotedCandidate.prototype.q = function(t) {
  let l = 0, r = this.times.length - 1;
  // 找到满足 times[l] <= t 的最大的 l
  while (l < r) {
      const m = l + Math.floor((r - l + 1) / 2);
      if (this.times[m] <= t) {
          l = m;
      } else {
          r = m - 1;
      }
  }

  return this.tops[l];
};
