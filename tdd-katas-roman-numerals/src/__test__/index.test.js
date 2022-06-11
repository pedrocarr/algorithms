const fizzBuzz = require('../index')


describe('fizzBuzz solver', () => {

  it('should return "" if n is not divisible by 2 or 3', () => {
    
    expect(fizzBuzz.solve(1)).toEqual("");
    expect(fizzBuzz.solve(7)).toEqual("");
    expect(fizzBuzz.solve(11)).toEqual("");
  });

  it('should return "fizz" if n is divisible by 2 not 3', () => {
    
    expect(fizzBuzz.solve(2)).toEqual("fizz");
    expect(fizzBuzz.solve(4)).toEqual("fizz");
    expect(fizzBuzz.solve(8)).toEqual("fizz");
  });

  it('should return "buzz" if n is divisible by 3 not 2', () => {
    
    expect(fizzBuzz.solve(3)).toEqual("buzz");
    expect(fizzBuzz.solve(9)).toEqual("buzz");
    expect(fizzBuzz.solve(21)).toEqual("buzz");
  });

  it('should return "fizz buzz" if n is divisible by 3 and 2', () => {
    
    expect(fizzBuzz.solve(2*3)).toEqual("fizz buzz");
    expect(fizzBuzz.solve(2*3*7)).toEqual("fizz buzz");
    expect(fizzBuzz.solve(30)).toEqual("fizz buzz");
  });
});