const fizzBuzz = require('../index')


describe('fizzBuzz solver', () => {

  it('should return "" if n is not divisible by 2 or 3', () => {
    
    expect(fizzBuzz.solve(1)).toEqual("");
    expect(fizzBuzz.solve(7)).toEqual("");
    expect(fizzBuzz.solve(11)).toEqual("");
  });
});