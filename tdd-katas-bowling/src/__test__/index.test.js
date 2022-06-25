const calcScore = require('../index.js')

describe('Scoring Bowling', () => {
  it('All gutter balls -> 0', () => {
    const rolls = Array(20).fill(0);
    expect(calcScore(rolls)).toEqual(0)
  });


  it('All single balls -> 20', () => {
    const rolls = Array(20).fill(1);
    expect(calcScore(rolls)).toEqual(20)
  });
});