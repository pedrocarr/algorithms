/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
  let left = 0 // buy
  let right = 1 // sell

  let maxProfit = 0

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]

      maxProfit = Math.max(maxProfit, profit)
    } else {
      left = right
    }

    right++
  }

  return maxProfit
}


// prices = [7,6,4,3,1]

