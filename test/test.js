var request = require('supertest');
var app = require('../app.js');
describe('GET /will', function() {
  it('respond with Hello Will!', function(done) {
    request(app).get('/will').expect('Hello Will!', done);
  });
});  