"use strict";

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function dividePlayers(skill) {
  skill.sort(function (a, b) {
    return a - b;
  });
  console.log(skill);
  var len = skill.length;
  var sum = skill[0] + skill[len - 1];
  var ans = skill[0] * skill[len - 1];

  for (var i = 1; i < len / 2; i++) {
    if (skill[i] + skill[len - 1 - i] !== sum) {
      return -1;
    }

    ans += skill[i] * skill[len - 1 - i];
  }

  return ans;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
console.log(dividePlayers([3, 4]));
console.log(dividePlayers([1, 1, 2, 3]));