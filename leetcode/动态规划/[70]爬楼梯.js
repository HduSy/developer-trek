/**
 * 明确dp数组及下标含义
 * 找出递推公式
 * 初始化dp
 * 遍历
 * 打印
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 1) return 1
  if(n === 2) return 2
  const dp = [0, 1, 2] // dp[i] 代表方法总数，i代表台阶数
  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};