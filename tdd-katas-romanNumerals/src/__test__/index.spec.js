
const romanFor = require('../index')

describe('romanNumeralGenerator', () => {
  it('should generate a roman numeral for a given decimal number', () => {
    const results = {
      "I": 1,
      "II": 2,
      "III": 3,
      "IV": 4,
      "V": 5,
      "MMXIX": 2019,
      "MMMCMXCIX": 3999,
    }

    Object.entries(results).forEach(([key, value]) =>{
      expect(romanFor.romanNumeralGenerator(value)).toBe(key)
    })
  });
});