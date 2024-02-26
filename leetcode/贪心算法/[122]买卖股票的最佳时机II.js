/**
 * 贪心算法，计算每天的正利润，累计即可
 * https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII.md#%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  for(let i = 1; i < prices.length; i++) {
    profit += Math.max(prices[i] - prices[i-1], 0)
  }
  return profit
};

// prices[3]-prices[1] = prices[3]-prices[2]+prices[2]-prices[1] 将区间转为每日维度的计算