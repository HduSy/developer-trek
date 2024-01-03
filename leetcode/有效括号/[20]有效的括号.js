/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length === 0) return true
  if(s.length === 1) return false
  const right = [')', ']', '}']
  if(right.includes(s[0])) return false
  const left = ['(', '[', '{']
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if(left.includes(c)) {
      stack.push(c)
      continue
    }
    if(right.includes(c) && left[right.indexOf(c)] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      return false
    }
  }
  if(stack.length > 0) return false
  return true
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length
  if(len % 2 === 1) return false // 符合条件的字符串一定是偶数个字符
  // hash表存储括号键值对，方便查询右括号对应做括号进行对比
  // const hashMap = new Map([
  //   [')', '('],
  //   [']', '['],
  //   ['}', '{']
  // ])
  const hashObj = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  const stack = [] // 关键数据结构，以栈存储
  for (const C of s) {
    if(hashObj[C]) {
      if(!stack.length || hashObj[C] !== stack[stack.length-1]) {
        return false
      }
      stack.pop()
    } else {
      stack.push(C)
    }
  }
  return !stack.length
}