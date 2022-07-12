const romanNumeralsGenerator = (number) => {
  if (number == 3) {
    return "III";
  }
  if (number == 2) {
    return "II";
  }
  return "I";
}



describe('romanNumeralsGenerator', () => { //ARRANGE

  it('should generate a roman numeral from a given decimal number', () => { // ASSERT

    expect(romanNumeralsGenerator(1)).toEqual("I"); // ACT
    expect(romanNumeralsGenerator(2)).toEqual("II");
    expect(romanNumeralsGenerator(3)).toEqual("III");
  });
});