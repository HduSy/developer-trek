/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0, res = nums.length + 1
  let sum = 0
  while(right < nums.length) {
    let n = nums[right]
    if(n >= target) return 1
    sum += n // 更新
    while(sum >= target) {
      res = Math.min(res, right - left + 1)
      let m = nums[left]
      sum -= m
      left++ // 向左缩小窗口
    }
    right++ // 向右扩大窗口
  }
  return res > nums.length ? 0 : res
};

var minSubArrayLen = function(target, nums) {
  let left = 0, right = 0, res = nums.length + 1
  let sum = 0
  while(right < nums.length) {
    let n = nums[right]
    if(n >= target) return 1
    sum += n
    while(sum >= target) {
      res = Math.min(res, right - left + 1)
      sum -= nums[left]
      left++ // 不断向右缩小窗口
    }
    right ++ // 不断向右扩大
  }
  return res > nums.length ? 0 : res
}