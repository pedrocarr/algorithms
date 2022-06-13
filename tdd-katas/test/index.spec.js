const fizzBuzzFunction = (n) => {
  if (n % 5 === 0 && n % 3 === 0) return "FizzBuzz"
  if (n % 5 === 0) return "Buzz"
  if (n % 3 === 0) return "Fizz"
  return n;
}


describe('fizzBuzzFunction', () => {

  it('should return n if n is not divisible by 5 and is not divisible by 3', () => {

    expect(fizzBuzzFunction(1)).toEqual(1)
    expect(fizzBuzzFunction(2)).toEqual(2)
  });

  it('should return "Fizz" if n is divisible by 3', () => {
    
    expect(fizzBuzzFunction(3)).toEqual("Fizz")
    expect(fizzBuzzFunction(6)).toEqual("Fizz")
  });

  it('should return "Buzz" if n is divisible by 5', () => {
    
    expect(fizzBuzzFunction(5)).toEqual("Buzz")
    expect(fizzBuzzFunction(10)).toEqual("Buzz")
  });

  it('should return "FizzBuzz" if n is divisible by 5 and by 3', () => {
    
    expect(fizzBuzzFunction(15)).toEqual("FizzBuzz")
    expect(fizzBuzzFunction(30)).toEqual("FizzBuzz")
  });
});