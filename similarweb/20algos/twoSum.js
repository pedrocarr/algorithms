/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i ++) {
    const num = nums[i]

    const complement = target - num

    if (map.has(complement)) {
      return [map.get(complement), i]
    } else {
      map.set(num) = i
    }
  }

  return []
}
