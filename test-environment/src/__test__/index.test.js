const roman = require('../index')

describe('romanNumeralGenerator', () => { //ARRANGE

  it('should generate a roman numeral for a given number', () => { // ASSERT

    expect(roman.romanNumeralGenerator(1)).toEqual("I"); // ACT
    expect(roman.romanNumeralGenerator(2)).toEqual("II"); 
    expect(roman.romanNumeralGenerator(3)).toEqual("III"); 
    expect(roman.romanNumeralGenerator(4)).toEqual("IV"); 
    expect(roman.romanNumeralGenerator(5)).toEqual("V"); 
    expect(roman.romanNumeralGenerator(7)).toEqual("VII")
    expect(roman.romanNumeralGenerator(8)).toEqual("VIII")
    expect(roman.romanNumeralGenerator(10)).toEqual("X")
    expect(roman.romanNumeralGenerator(13)).toEqual("XIII")
    expect(roman.romanNumeralGenerator(17)).toEqual("XVII")
    expect(roman.romanNumeralGenerator(3199)).toEqual("MMMCXCIX")
  });
});