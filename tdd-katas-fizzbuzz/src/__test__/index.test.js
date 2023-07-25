const fizzBuzz = require('../index')


describe('processInteger function', () => {

  it('should return n if n is not divisible by 3 or 5', () => {

    expect(fizzBuzz.processInteger(1)).toEqual(1);
    expect(fizzBuzz.processInteger(2)).toEqual(2);
  });

  it('should return "Fizz" if n is divisible by 3', () => {

    expect(fizzBuzz.processInteger(3)).toEqual('Fizz');
    expect(fizzBuzz.processInteger(6)).toEqual('Fizz');
  });

  it('should return "Buzz" if n is divisible by 5', () => {

    expect(fizzBuzz.processInteger(5)).toEqual('Buzz');
    expect(fizzBuzz.processInteger(10)).toEqual('Buzz');
  });

  it('should return "FizzBuzz" if n is divisible by 5 and 3', () => {

    expect(fizzBuzz.processInteger(15)).toEqual('FizzBuzz');
    expect(fizzBuzz.processInteger(30)).toEqual('FizzBuzz');
  });
});
