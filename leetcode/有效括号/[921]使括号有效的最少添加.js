/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  const len = s.length
  if( len === 1 ) return 1
  let result = 0
  const stack = []
  for (const char of s) {
    if(char === ')') {
      if(!stack.length) {
        result++
      } else if('(' !== stack[stack.length-1]) {
        stack.pop()
        result++
        stack.push(char)
      } else {
        stack.pop()
        result--
      }
    } else {
      stack.push(char)
      result++
    }
  }
  return result
};


((()())(
()()()()()() 4
((()()))() 2
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let result = 0 // 最终答案
  let need = 0 // 右括号需求数
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      need++
    } else {
      need--
      if(need===-1) {
        // 右括号太多了
        need = 0
        result++ // 插入左括号
      }
    }
  }
  return result + need
}