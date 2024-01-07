/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  return nums.filter(item => item !== val)
};

/**
 * 快慢指针做法
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0, fast = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};