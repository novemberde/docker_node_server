const app = require("../app");
const request = require('supertest');

describe('GET /', function () {
  it('respond with json', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect(200, done);
  });
});