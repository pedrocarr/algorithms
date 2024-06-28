const year = require('../index');


  describe('centuryFromYear function', () => {

    it('should return 1 for 1', () => {
      expect(year.centuryFromYear(1)).toEqual(1)
    });

    it('should return 2 for 102', () => {
      expect(year.centuryFromYear(102)).toEqual(2)
    });


    it('should return 19 for 1899', () => {
      expect(year.centuryFromYear(1899)).toEqual(19)
    });

    it('should return 20 for 1901', () => {
      expect(year.centuryFromYear(1901)).toEqual(20)
    });


    it('should return 19 for 1900', () => {
      expect(year.centuryFromYear(1900)).toEqual(19)
    });


  })


