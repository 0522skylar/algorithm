"use strict";

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var findRedundantConnection = function findRedundantConnection(edges) {
  var n = edges.length;
  var parent = new Array(n + 1).fill(0).map(function (value, index) {
    return index;
  });

  for (var i = 0; i < n; i++) {
    var edge = edges[i];
    var node1 = edge[0],
        node2 = edge[1];

    if (find(parent, node1) != find(parent, node2)) {
      union(parent, node1, node2);
    } else {
      return edge;
    }
  }

  return [0];
};

var union = function union(parent, index1, index2) {
  parent[find(parent, index1)] = find(parent, index2);
};

var find = function find(parent, index) {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index]);
  }

  return parent[index];
};

var minScore = function minScore(n, roads) {
  var ans = Number.MAX_VALUE;
  var len = roads.length;
  var parent = new Array(len + 1).fill(0).map(function (value, index) {
    return index;
  });

  for (var i = 0; i < len; i++) {
    var node1 = roads[i][0],
        node2 = roads[i][1]; // if(node1 === 1 || node1 === n || node2 === 1 || node2) {}

    if (find(parent, node1) != find(parent, node2)) {
      ans = Math.min(ans, roads[i][2]);
      union(parent, node1, node2);
    } else {
      return ans;
    }
  }

  return ans;
};

console.log(minScore(4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]])); // 5

console.log(minScore(4, [[1, 2, 2], [1, 3, 4], [3, 4, 7]])); // 2

console.log(minScore(20, [[18, 20, 9207], [14, 12, 1024], [11, 9, 3056], [8, 19, 416], [3, 18, 5898], [17, 3, 6779], [13, 15, 3539], [15, 11, 1451], [19, 2, 3805], [9, 8, 2238], [1, 16, 618], [16, 14, 55], [17, 7, 6903], [12, 13, 1559], [2, 17, 3693]])); // 55

console.log(minScore(7, [[1, 3, 1484], [3, 2, 3876], [2, 4, 6823], [6, 7, 579], [5, 6, 4436], [4, 5, 8830]])); // 579

console.log(minScore(13, [[2, 12, 1891], [10, 9, 4138], [11, 3, 2007], [1, 10, 9390], [12, 8, 1915], [6, 2, 1098], [5, 4, 2795], [3, 13, 4562], [9, 7, 9202], [4, 6, 6752], [8, 11, 1480], [7, 5, 9827]])); // 1098