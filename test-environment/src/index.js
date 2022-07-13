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

module.exports.romanNumeralGenerator = romanNumeralGenerator;
