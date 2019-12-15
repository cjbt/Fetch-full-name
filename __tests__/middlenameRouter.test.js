const request = require('supertest');
const server = require('../server');

describe('middlenameRouter', () => {
  it('should return a status 200 OK [GET]', async () => {
    const res = await request(server).get('/middlename');
    expect(res.status).toBe(200);
  });
});
