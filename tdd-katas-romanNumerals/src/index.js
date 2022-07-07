const romanNumeralGenerator = (number) => {
  const map = {
    IV: 4,
    III: 3,
    II: 2,
    I: 1,
  };
  let result = '';

  for (key in map) {
    result += key.repeat(Math.floor(number / map[key]));
    number %= map[key];
  }


  return result;
}




module.exports.romanNumeralGenerator = romanNumeralGenerator;