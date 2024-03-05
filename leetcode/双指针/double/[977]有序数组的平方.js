/**
 * 自解
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  nums = nums.map(n => n * n).sort((a, b) => a - b)
  return nums
};


// 双指针写法
// 非递减排序的数组它的平方后仍要求非递减，两端往中间走，平方值一定越来越大
var sortedSquares = function (nums) {
  let left = 0, right = nums.length - 1
  let res = []
  while (left <= right) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
      res.push(Math.pow(nums[left], 2))
      left++
    } else {
      res.push(Math.pow(nums[right], 2))
      right--
    }
  }
  return res.reverse()
};