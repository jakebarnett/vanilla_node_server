'use strict';

require('../lib/server.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;

var numberOfFiles;
var newNumberOfFiles;

describe('the post request' , function () {

  fs.readdir('./data' , function (err, files) {
    numberOfFiles = files.length;
  });

  it('should create a new file' , function (done) {
    chai.request('localhost:3000')
    .post('/penguins')
    .send({name : "deadmau5"})
    .end(function (err, res) {
      fs.readdir('./data' , function (err, files) {
        newNumberOfFiles = files.length;
        expect(newNumberOfFiles).to.eql(numberOfFiles + 1);
        done();
      });
    });
  });

  after ( function (done) {
    fs.unlink("./data/1.json");
    done();
  });

});
