/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let visited = new Array(graph.length).fill(0);
    let color = new Array(graph.length).fill(0);// 初始化,color用于存储节点的着色情况
    let flag = true;
    const dfs = (graph, s) => {
        if(!flag) {
            return;
        }
        visited[s] = true;

        for(let i = 0; i < graph[s].length; i++) {
            let next = graph[s][i];
            if(visited[next]) {
                if(color[next] == color[s]) {// 若相连结点已着色,且该颜色与当前节点颜色相同,则返回false
                    flag = false
                }
            } else {
                color[next] = !color[s]// 颜色取反
                dfs(graph, next)
            }
        }
    }
    for (let i = 0; i < graph.length; i++) {
        if(!visited[i]) {
            dfs(graph, i)
        }
    }

    return flag
};

console.log(isBipartite( [[1,2,3],[0,2],[0,1,3],[0,2]]))
console.log(isBipartite( [[1,3],[0,2],[1,3],[0,2]]))

