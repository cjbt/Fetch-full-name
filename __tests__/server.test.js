const request = require('supertest');
const server = require('../server');

describe('/ Test Route', () => {
  it('should return status 200', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });

  it('should set testing environment', async () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  it('should return type of text/html', async () => {
    const res = await request(server).get('/');
    expect(res.type).toBe('text/html');
  });
});
