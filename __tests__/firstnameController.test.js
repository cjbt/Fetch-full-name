const db = require('../utils/helpers');

describe('firstnameController', () => {
  it('getAFirstname should return Jane', async () => {
    const res = await db.get('firstname');
    expect(res.firstname).toBe('Jane');
  });
});
