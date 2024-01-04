// 耗时太长未通过
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length
  if(len===1) return s
  let result = ''
  for (let i = 0; i < len; i++) {
    for(let j = i+1;j <= len; j++) {
      let t = s.slice(i, j)
      if(isHuiwen(t) && t.length > result.length) result = t
    }
  }
  return result
};

// 'aba' 'ababa'
function isHuiwen(s) {
  let len = s.length
  if(len === 1) return true
  let top = len % 2 === 0 ? len/2-1 : Math.floor(len/2)
  for (let i = 0; i <= top; i++) {
    if(s[i] !== s[len-1-i]) return false
  }
  return true
}

