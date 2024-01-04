/**
 * 原地修改数组
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let fast = 0, slow = 0
  while(fast < nums.length) {
    if(nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
};