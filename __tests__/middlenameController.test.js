const db = require('../utils/helpers');

describe('middlenameController', () => {
  it('getAMiddlename should return Jane', async () => {
    const res = await db.get('middlename');
    expect(res.middlename).toBe('Smith');
  });
});
