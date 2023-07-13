/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let key = [];
  const dfs = (roomId) => {
    let arrkey = rooms[roomId];
    for(let i = 0; i < arrkey.length; i++) {
      let item = arrkey[i]
      if(key.indexOf(item) == -1) {
        key.push(item)
        dfs(item)
      }
    }
    return
  }
  dfs(0)
  // console.log(key)
  key.push(0)
  
  return [...new Set(key)].length === rooms.length
};

console.log(canVisitAllRooms( [[1],[2],[3],[]]))
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))