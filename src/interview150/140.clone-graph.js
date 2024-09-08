/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  let visited = new Map()
  if (node === null) {
    return node
  }
  const dfs = (n) => {
    const nCopy = new Node(n.val);
    visited.set(n, nCopy);
    (n.neighbors || []).forEach(ne => {
      if (!visited.has(ne)) {
        dfs(ne);
      }
      nCopy.neighbors.push(visited.get(ne));
    })
  }
  dfs(node);
  return (visited.get(node));
};