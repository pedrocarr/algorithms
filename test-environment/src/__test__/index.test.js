const romanNumeralGenerator = (decimal) => {
  let roman = "";
  const romanToDecimal = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  Object.entries(romanToDecimal).forEach(([key, value]) => {
  while (decimal >= value) {
      roman += key;
      decimal -= value;
    }
  })
  return roman
} 


describe('romanNumeralGenerator', () => { //ARRANGE

  it('should generate a roman numeral for a given number', () => { // ASSERT

    expect(romanNumeralGenerator(1)).toEqual("I"); // ACT
    expect(romanNumeralGenerator(2)).toEqual("II"); 
    expect(romanNumeralGenerator(3)).toEqual("III"); 
    expect(romanNumeralGenerator(4)).toEqual("IV"); 
    expect(romanNumeralGenerator(5)).toEqual("V"); 
    expect(romanNumeralGenerator(7)).toEqual("VII")
    expect(romanNumeralGenerator(8)).toEqual("VIII")
    expect(romanNumeralGenerator(10)).toEqual("X")
    expect(romanNumeralGenerator(13)).toEqual("XIII")
    expect(romanNumeralGenerator(17)).toEqual("XVII")
    expect(romanNumeralGenerator(3199)).toEqual("MMMCXCIX")
  });
});