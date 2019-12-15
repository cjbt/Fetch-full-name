const db = require('../utils/helpers');

describe('lastnameController', () => {
  it('getALastname should return Jane', async () => {
    const res = await db.get('lastname');
    expect(res.lastname).toBe('Doe');
  });
});
