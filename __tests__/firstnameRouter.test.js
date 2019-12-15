const request = require('supertest');
const server = require('../server');

describe('firstnameRouter', () => {
  it('should return a status 200 OK [GET]', async () => {
    const res = await request(server).get('/firstname');
    expect(res.status).toBe(200);
  });
});
