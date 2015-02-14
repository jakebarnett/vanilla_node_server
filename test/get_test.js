'use strict';

var fs = require('fs');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('the get request' , function () {
  var dataString = '';
  var server = 'localhost:3000';
  it('should respond to a get request with a file' , function () {
    chai.request(server)
    .get('/home/users')
    .end(function(err, res, done) {
      fs.readFile('../data/users.json' , function (err, data){
        dataString = data.toString('utf-8');
      });
      expect(res.text).to.eql(dataString);
      expect(res).to.have.status(200);
      console.log(dataString);
      done();
    });
  })
})
