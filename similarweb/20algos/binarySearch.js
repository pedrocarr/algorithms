function search() {
  let beginIndex = 0

  let finalIndex = nums.length - 1

  while (beginIndex <= finalIndex) {
    const midpoint = Math.floor(beginIndex + (finalIndex - beginIndex) / 2)

    const midpointValue = nums[midpoint]

    if (target === midpointValue) {
      return midpoint
    } else if (target < midpointValue) {
      finalIndex = midpoint - 1
    } else {
      beginIndex = midpoint + 1
    }
  }

  return -1
}
