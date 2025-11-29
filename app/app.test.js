const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('returns hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Welcome to my awesome DevOps application!'); // Update this
  });
});
