/**
 * 原地修改数组
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 0, fast = 1
  while(fast < nums.length) {
    if(nums[slow] !== nums[fast]) {
      nums[slow+1] = nums[fast]
      slow++
    }
    fast++
  }
  return slow + 1
};