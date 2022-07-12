const romanNumeralsGenerator = (number) => {
  if (number == 3) {
    return "III";
  }
  if (number == 2) {
    return "II";
  }
  // return "I";
}



describe('romanNumeralsGenerator', () => {
  it('should generate a roman numeral from a given decimal number', () => {
    expect(romanNumeralsGenerator(1)).toEqual("I");
    expect(romanNumeralsGenerator(2)).toEqual("II");
    expect(romanNumeralsGenerator(3)).toEqual("III");
  });
});