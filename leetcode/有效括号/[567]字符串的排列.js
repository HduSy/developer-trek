/**
 * 先分析问题，寻找规律，进而找突破口
 * 子串问题考虑滑动窗口法。题目要求s2的子串是s1的排列，这说明：
 * 1. 窗口长度固定
 * 2. 不用比对s1排列的所有情况，只需要s2子串每个字母出现个数与s1每个字母次数相同即可
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s1arr = new Array(26).fill(0), s2arr = new Array(26).fill(0) // 分别用来存储字符出现数
  let s1len = s1.length, s2len = s2.length
  if(s1len > s2len) return false
  for(let i = 0; i< s1len; i++) s1arr[s1.charCodeAt(i) - 'a'.charCodeAt()]++
  // 滑动窗口遍历s2
  for(let i = 0; i< s2len; i++) { // 滑动窗口右侧不断+1滑动
    s2arr[s2.charCodeAt(i) - 'a'.charCodeAt()]++
    if(i >= s1len-1) {
      // 窗口才创建完成
      if(s1arr.toString() === s2arr.toString()) return true // 对比
      s2arr[s2.charCodeAt(i - s1len + 1) - 'a'.charCodeAt()]-- // 滑动窗口左侧缩减1
    }
  }
  return false
};