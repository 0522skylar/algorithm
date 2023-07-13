"use strict";

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function robotSim(commands, obstacles) {
  var obstaclesSet = new Set();

  for (var i = 0; i < obstacles.length; i++) {
    var str = obstacles[i][0] + "," + obstacles[i][1];
    obstaclesSet.add(str);
  }

  var ans = 0;
  var left = 0;
  var right = 0;
  var flag = 0; // 北

  var dx = [0, 1, 0, -1];
  var dy = [1, 0, -1, 0];

  for (var _i = 0; _i < commands.length; _i++) {
    if (commands[_i] === -1) {
      if (flag == 0) {
        flag = 1; // x++ 东
      } else if (flag === 1) {
        flag = 2; // y++ 南
      } else if (flag === 2) {
        flag = 3; // x++ 西
      } else {
        flag = 0; //y++ 北
      }
    } else if (commands[_i] === -2) {
      if (flag == 0) {
        flag = 3; // x++ 西
      } else if (flag === 1) {
        flag = 0; // y++ 北
      } else if (flag === 2) {
        flag = 1; // x++ 东
      } else {
        flag = 2; //y++ 南
      }
    } else {
      for (var k = 0; k < commands[_i]; k++) {
        var nx = left + dx[flag];
        var ny = right + dy[flag];
        var code = nx + "," + ny;

        if (!obstaclesSet.has(code)) {
          left = nx;
          right = ny;
          ans = Math.max(ans, left * left + right * right);
        } else {
          break; // 遇到障碍，跳出本次命令，接着走下一步
        }
      }
    }
  }

  return ans;
}; // console.log(robotSim([4,-1,3], []))
// console.log(robotSim([4,-1,4,-2,4], [[2,4]]))


console.log(robotSim([7, -2, -2, 7, 5], [[-3, 2], [-2, 1], [0, 1], [-2, 4], [-1, 0], [-2, -3], [0, -3], [4, 4], [-3, 3], [2, 2]]));