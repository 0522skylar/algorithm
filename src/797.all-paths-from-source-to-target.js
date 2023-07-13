/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const ans = []
  let arr = [0]
  const dfs = (n, arr) => {
    if(n === graph.length - 1) {
      ans.push(arr.concat())
      // arr = []
      return
    }

    for(let i = 0; i < graph[n].length; i++) {
      arr.push(graph[n][i]);
      dfs(graph[n][i], arr)
      arr.pop()
    }
  }

  dfs(0, arr)
  return ans
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]])) // [[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]])) // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]