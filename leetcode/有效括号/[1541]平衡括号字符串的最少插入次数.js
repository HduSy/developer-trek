/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let res = 0 // 操作次数
  let need = 0 // 所需右括号数 1:2
  // 遍历
  for (let i = 0; i < s.length; i++) {
    // 对不同情况进行特殊情况处理
    if(s[i] === '(') {
      need+=2
      if(need%2 === 1) { // 所需右括号数为奇数
        res++ // 插入一个右括号
        need--
      }
    }
    if(s[i] === ')') {
      need--
      // 说明右括号太多了
      if(need === -1) {
        res++ // 需要插入一个左括号
        need = 1 // 同时，对右括号的需求变为 1
      }
    }
  }
  return res + need
};