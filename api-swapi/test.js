const assert = require('assert');
const { getPeople } = require('./service')


describe('Star Wars Test', () => {
    it('should return the correct mapped format', async () => {
        const expected = [{
            name: 'R2-D2',
            mass: '32',
        }]

        const baseName = 'r2-d2'


        const result = await getPeople(baseName)

        assert.deepEqual(result, expected)
    })
});
