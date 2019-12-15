const db = require('../utils/helpers');
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

describe('Get FullName', () => {
  it('should get full name in the right order (integration)', async () => {
    const first = await db.get('firstname');
    const middle = await db.get('middlename');
    const last = await db.get('lastname');
    expect(`${first.firstname} ${middle.middlename} ${last.lastname}`).toBe(
      'Jane Smith Doe'
    );
  });
});
