'use strict';

var fs = require('fs');

module.exports = function (req, res) {
  var dataString = '';

  req.on('data' , function (data) {
    dataString += data.toString('utf-8');
  });

  req.on('end' , function (err) {
    fs.readdir('../data/' , function(err, files) {
      var newFile;
      var largest = files.length;
      newFile = (largest + 1).toString();
      createFile(newFile);
      createResponse();
    });

    function createFile (newFile) {
      fs.appendFile('../data/' + newFile + '.json' , dataString);
    }
    function createResponse () {
      var dataObject = JSON.parse(dataString);
      res.writeHead(200, {'Content-Type' : 'application/json'});
      res.write(JSON.stringify(dataObject));
      res.end();
    }
  });
};

