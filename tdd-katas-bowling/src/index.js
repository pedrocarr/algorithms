

const calcScore = (rolls) => {
  let score = 0;
  for (let i = 0; i < rolls.legnth; i++) {
    const roll = rolls[i];
    score += roll;
  }

  return score
}


module.exports = calcScore;