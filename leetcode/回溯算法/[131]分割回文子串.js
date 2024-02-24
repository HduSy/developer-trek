/**
 * 分割么，选过的不能再选
 * 1个1个分割
 * 2个2个分割
 * 3个3个分割
 * ...
 * 直到整个字符串一块分
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = [] // 存储结果
  let path = [] // 中间结果
  let startIndex = 1 // 不回头
  let b = s.length // 边界，深度

  function backtrack(s, startIndex) {
    if(path.join('').length === 3) {
      res.push([...path])
      return
    }

  }

  function isHuiwen(s) {
    return s = s.split('').reverse().join('')
  }

  return res
};

// 回溯法太难了

var partition = function(s) {
  let res = []
  let path = []
  let startIndex = 0 // 切割线

  backtrack(s, startIndex)

  function backtrack(s, startIndex) {
    if(startIndex >= s.length) { // 切割到字符串尾
      res.push([...path])
      return
    }

    for(let i = startIndex; i < s.length; i++) {
      // 做选择
      if(isHuiWen(s, startIndex, i)) {
        path.push(s.substr(startIndex, i - startIndex + 1))
      } else {
        continue
      }

      backtrack(s, i + 1)
      
      path.pop()
    }
  }

  // 双指针判断是否是回文串
  function isHuiWen(str, start, end) {
    for(let i = start, j = end; i < j; i++,j--) {
      if(str[i]!==str[j]) {
        return false
      }
    }
    return true
  }

  return res
}