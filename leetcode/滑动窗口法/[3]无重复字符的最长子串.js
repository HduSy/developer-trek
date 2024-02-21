/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * 滑动窗口法
 * 子串问题，左右指针滑窗口，一前一后同向进
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map() // 存储窗口字符
  let left = 0, right = 0, res = 0
  while(right < s.length) { // 滑到最右边结束
    let c = s[right]
    map.set(c, (map.get(c)||0) + 1)
    while(map.get(c) > 1) {
      let d = s[left]
      left++ // 向左缩小窗口
      map.set(d, map.get(d) - 1)
    }
    res = Math.max(res, right - left + 1)
    right++ // 向右扩大窗口
  }
  return res
};