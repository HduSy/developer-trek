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

// 也能过
var removeDuplicates = function(nums) {
  let slow = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[slow] !== nums[i]) {
      slow++
      nums[slow] = nums[i]
    }
  }
  // 0 - slow + 1 是保证不重复的
  return slow + 1
}