

const calcScore = (rolls) => {
const sumRolls = rolls.reduce((sum, roll) => sum + roll)

return sumRolls
}
module.exports = calcScore;