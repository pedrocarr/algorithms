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
  Object.entries(romanToDecimal).forEach(([key, value]) =>{
    while (decimal >=  value) {
      roman += key;
      decimal -= value;
    }
  })
  return roman;
}

describe('romanNumeralGenerator', () => {

  it("should convert a roman numeral for a given decimal number",()=>{

    const results = {
      "I": 1,
      "II": 2,
      "III": 3,
      "IV": 4,
      "V": 5,
      "MMXIX": 2019,
      "MMMCMXCIX": 3999
    }

    Object.entries(results).forEach(([key, value]) =>{
        expect(romanNumeralGenerator(value)).toBe(key);
    });
  });

})
