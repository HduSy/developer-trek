/**
 * 自解：语言特性
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.split(' ').filter(str => str !== '')
  s = s.reverse().join(' ')
  return s
};

/**
 * 双指针法
 */
var reverseWords = function(s) {
  s = s.trim()
  let res = []
  let slow = fast = s.length - 1
  while(fast >= 0) {
    while(fast >=0 && s[fast] !== ' ') fast--
    res.push(s.slice(fast+1, slow+1))
    while(fast >=0 && s[fast] === ' ') fast--
    slow = fast
  }
  return res.join(' ')
};