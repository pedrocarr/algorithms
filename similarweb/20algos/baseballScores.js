function calPoints(operations) {
  let stack = [];

  for (let op of operations) {
      if (!isNaN(op)) {
          stack.push(Number(op));  // Convert string number to integer
      } else if (op === "C") {
          stack.pop();  // Remove last valid score
      } else if (op === "D") {
          stack.push(stack[stack.length - 1] * 2);  // Double last score
      } else if (op === "+") {
          stack.push(stack[stack.length - 1] + stack[stack.length - 2]);  // Sum last two scores
      }
  }

  return stack.reduce((sum, num) => sum + num, 0);  // Sum up all valid scores
}
