/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replaceAll('.', '[.]') // 浏览器环境内存在replaceAll, node环境内只有replace
};

console.log(defangIPaddr( "1.1.1.1"))