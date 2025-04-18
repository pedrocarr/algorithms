const isLeapYear = require('../index')


describe('checkIfIsLeapYear', () => {
  it('should return false if year is not divisible by 4', () => {
    expect(isLeapYear.checkIfIsLeapYear(1997)).toEqual(false)
  });

  it('should return true if year is divisible by 4', () => {
    expect(isLeapYear.checkIfIsLeapYear(1996)).toEqual(true)
  });

  it('should return false if year is divisible by 4, by 100, not by 400', () => {
    expect(isLeapYear.checkIfIsLeapYear(1800)).toEqual(false)
  });

  it('should return true if year is divisible by 400', () => {
    expect(isLeapYear.checkIfIsLeapYear(1600)).toEqual(true)
  });

});
