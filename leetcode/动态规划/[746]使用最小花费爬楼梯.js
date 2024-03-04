/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // cost[i] 第i阶走下一步的花费，求最小花费
  // sum[i] 走到第i阶所需花费
  // sum[i] = Math.min(sum[i-1] + cost[i-1], sum[i-2] + cost[i-2])
  let sum = [0, 0]

  for(let i = 2; i < cost.length; i++) {
    sum[i] = Math.min(sum[i-1] + cost[i-1], sum[i-2] + cost[i-2])
  }
  return sum[cost.length - 1]
};