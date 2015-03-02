'use strict';

require('../lib/server.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;

chai.use(chaihttp);

describe('the patch request' , function() {

  before (function (done) {
    var testData = '{"name":"bassnectar", "color":"black"}';
    fs.writeFile("./data/test.json" , testData, function(err) {
      if (err) throw err;
    });
    done();
  });

  it('should update an existing file\'s contents' , function (done) {
    chai.request('localhost:3000')
    .patch('/penguins/test')
    .send({name : "deadmau5"})
    .end( function (err, res) {
      expect(res.text).to.eql('{"name":"deadmau5","color":"black"}');
      done();
    });
  });

  after ( function (done) {
    fs.unlink("./data/test.json");
    done();
  });

});
