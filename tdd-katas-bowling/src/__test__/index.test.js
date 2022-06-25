const calcScore = require('../index.js')

describe('Scoring Bowling', () => {
  it('All gutter balls -> 0', () => {
    const rolls = [
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ]
    expect(calcScore(rolls)).toEqual(0)
  });
});