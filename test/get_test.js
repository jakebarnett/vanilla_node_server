'use strict';

require('../lib/server.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');

chai.use(chaihttp);

var expect = chai.expect;
var dataString;

describe('the get request' , function () {

  before (function (done) {
    var testData = '{"name":"bassnectar", "color":"black"}';
    fs.writeFile("./data/test.json" , testData, function(err) {
      if (err) throw err;
    });
    done();
  });

  it('should respond with a json string of the file contents' , function (done) {
    chai.request('localhost:3000')
    .get('/penguins/test')
    .end(function(err, res) {
      fs.readFile('./data/test.json' , function (err, data) {
        dataString = data.toString('utf-8');
        expect(res.text).to.eql(dataString);
        done();
      });
    });
  });

  after ( function (done) {
    fs.unlinkSync("./data/test.json");
    done();
  });

});

