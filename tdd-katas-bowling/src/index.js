

const calcScore = (rolls) => {
  const rollsSum = rolls.reduce((a, b) => a + b);
  
  return rollsSum;
  
}


module.exports = calcScore;