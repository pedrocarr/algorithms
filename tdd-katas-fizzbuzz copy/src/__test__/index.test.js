const copyName = require('../index')


  describe('copyName function', () => {

    it('should return an name + (copy)', () => {
      const result = copyName.copyName('Pedro')
      expect(result).toEqual('Pedro (copy)')
    })

    it('should return an name + (copy)(1) if the copy already exists', () => {
      const result = copyName.copyName('Pedro (copy)')
      expect(result).toEqual('Pedro (copy)(1)')
    })

    it('should return an name + (copy)(2) if the copy already exists', () => {
      const result = copyName.copyName('Pedro (copy)(1)')
      expect(result).toEqual('Pedro (copy)(2)')
    })

    it('should return an name + (copy)(3) if the copy already exists', () => {
      const result = copyName.copyName('Pedro (copy)(2)')
      expect(result).toEqual('Pedro (copy)(3)')
    })

    it('should return an name + (copy) + (copy) if the copy already exists', () => {
      const result = copyName.copyName('Pedro (copy)')
      expect(result).toEqual('Pedro (copy)(copy)')
    })


    it('should return an name + (copy) + (copy)(1) if the copy already exists', () => {
      const result = copyName.copyName('Pedro (copy)(copy)')
      expect(result).toEqual('Pedro (copy)(copy)(1)')
    })

    it('should return an name + (copy) + (copy)(2) if the copy already exists', () => {
      const result = copyName.copyName('Pedro (copy)(copy)(1)')
      expect(result).toEqual('Pedro (copy)(copy)(2)')
    })
  })


