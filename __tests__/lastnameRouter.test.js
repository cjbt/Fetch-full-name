const request = require('supertest');
const server = require('../server');

describe('lastnameRouter', () => {
  it('should return a status 200 OK [GET]', async () => {
    const res = await request(server).get('/lastname');
    expect(res.status).toBe(200);
  });
});
