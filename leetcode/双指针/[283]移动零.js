/**
 * 自解
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0, fast = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[fast]!==0) {
      if(nums[slow]!==0) {
        slow++;
      } else {
        nums[slow] = nums[fast]
        nums[fast] = 0
        slow++;
      }
    }
    fast++
  }
  return nums
};

/**
 * 官方
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0, fast = 0
  while(fast < nums.length) {
    if(nums[fast]!==0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
  return nums
};