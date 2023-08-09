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