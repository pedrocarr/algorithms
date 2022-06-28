
const romanFor = require('../index')

describe('romanNumeralGenerator', () => {
  it('should generate a roman numeral for a given decimal number', () => {
    expect(romanFor.romanNumeralGenerator(1)).toEqual("I")
    expect(romanFor.romanNumeralGenerator(2)).toEqual("II")
    expect(romanFor.romanNumeralGenerator(3)).toEqual("III")
  });
});