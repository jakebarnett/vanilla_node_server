'use strict';

require('../lib/server.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;

chai.use(chaihttp);

var numberOfFiles;

describe('the delete request' , function () {

  before (function (done) {
    var testData = '{"name":"bassnectar", "color":"black"}';
    fs.writeFile("./data/test.json" , testData, function(err) {
      if (err) throw err;
    });
    done();
  });

  fs.readdir('./data' , function (err, files) {
    numberOfFiles = files.length;
  });

  it('should remove a file' , function(done) {
    chai.request('localhost:3000')
    .delete('/penguins/test')
    .end(function (err, res) {
      fs.readdir('./data' , function (err, files) {
        var newNumberOfFiles = files.length;
        done();
      });
    });
  });
});


