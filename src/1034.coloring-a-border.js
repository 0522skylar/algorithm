/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  var maxRow = grid.length; //找到最大的行
  var maxCol = grid[0].length;//找到最大的列
  var map = new Map();//存入是否查找过该元素 这里是用来记录下你找过的元素就不能重复的在找一便了不然递归他就没有终止条件了
  var changeBorderArr = []//放入你找到的边界最后循环讲颜色填充进去
  var value = grid[row][col];//找和之个值连通的值
  map.set(row + "," + col, true);
  dfs(row, col)//dfs代表深度优先，你也可以叫别的名字
  function dfs(x, y) {
      //这里为什么用四个数组的是用来找上下左右四个方向的
      var direc = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      let isBorder = false;
      for (let i = 0; i < 4; i++) {
          var r = x + direc[i][0];
          var c = y + direc[i][1];
          //最关键的是这里 判断他的上下左右要是还连通说明他就不是边界你就得继续递归不然就到了边界
          if (!(r >= 0 && r< maxRow && c >= 0 && c < maxCol && grid[r][c] == value)) {
              isBorder = true
          } else if (!map.has(r + "," + c)) {
              map.set(r + "," + c, true);
              dfs(r, c)
          }
      }
      //为什么不在isborder中就直接push呢，这里如果他是边界他会循环多次你要是直接在里面push会push很多重复的值不利于咱们换值（换颜色的循环操作）
      if (isBorder) {
          changeBorderArr.push([x, y]);
      }
  }
  for (let i = 0; i < changeBorderArr.length; i++) {
      const [x, y] = changeBorderArr[i];
      grid[x][y] = color
  }
  return grid
};

console.log(colorBorder([[1,1],[1,2]], 0, 0, 3))