/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0 // 记录最远可到达的位置
  for(let i = 0; i < nums.length; i++) {
    if(max < i) return false // 当前最远可到达的位置<索引i
    max = Math.max(i + nums[i], max) // 当前位置索引+当前位置最大的步数 i+nums[i] >= 最远位置max时 要更新max
  }
  return true
};