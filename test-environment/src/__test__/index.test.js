const romanNumeralsGenerator = (number) => {
  let roman = "";
  const romanToDecimal = {
    "X": 10,
    "V": 5,
    "I": 1,
  }
 

  for (key in romanToDecimal) {
    for(i = 0; i < number; i++)
    if (number >= romanToDecimal[key]) {
      roman += Object.keys(romanToDecimal).map(key => romanToDecimal[key][i])
      number -= romanToDecimal[key]
    }

  }
  // if(number >= 10) {
  //   roman += 'X';
  //   number -= 10;
  // }
  // if (number >= 5) {
  //   roman += 'V';
  //   number -= 5;
  // }
  // for (let i = 0; i < number; i++) {
  //   roman += 'I';
  // }
  // return roman
}



describe('romanNumeralsGenerator', () => { //ARRANGE

  it('should generate a roman numeral for a given decimal number', () => { // ASSERT

    expect(romanNumeralsGenerator(1)).toEqual("I"); // ACT
    expect(romanNumeralsGenerator(2)).toEqual("II");
    expect(romanNumeralsGenerator(3)).toEqual("III");
    expect(romanNumeralsGenerator(5)).toEqual("V");
    expect(romanNumeralsGenerator(7)).toEqual("VII");
    expect(romanNumeralsGenerator(10)).toEqual("X");
    expect(romanNumeralsGenerator(18)).toEqual("XVIII");
  });
});