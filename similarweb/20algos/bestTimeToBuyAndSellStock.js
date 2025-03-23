/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let left = 0 // buy

  let maxProfit = 0

  for (let right = 1; right < prices.length; right++) {

    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]

      maxProfit = Math.max(profit, maxProfit)
    } else {
      left = right
    }
  }

  return maxProfit
}


// prices = [7,6,4,3,1]

