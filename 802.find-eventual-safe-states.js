/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  let mem = new Array(graph.length).fill(0)
  let visited = new Array(graph.length).fill(false)
  const dfs = (map, mem, visited, start) => {
    if(mem[start] != 0) {
      return mem[start] === 1 ? true : false;
    }
    let res = true

    for(let i = 0; i < map[start].length; i++) {
      let item = map[start][i]
      if(visited[item]) {
        return false
      }
      visited[item] = true
      res = res && dfs(map, mem, visited, item)
      visited[item] = false
      if(!res) {
        break
      }
    }
    mem[start] = res ? 1 : 2
    return res;
  }
  for(let i = 0; i < graph.length; i++) {
    dfs(graph, mem, visited, i)
  }

  let ans = new Array();
  for(let j = 0; j < mem.length; j++) {
    if(mem[j] === 1) {
      ans.push(j)
    }
  }
  return ans;
};


console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))
console.log(eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]))