'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName) {

  var dataString = '';

    req.on('data' , function (data) {
      dataString += data.toString('utf-8');
    });
    req.on('end' , function () {
      var dataObject = JSON.parse(dataString);
      res.writeHead(200, {'Content-Type' : 'application/json'});

      res.write(JSON.stringify(dataObject));
      fs.writeFile('../data/' + fileName + '.json' , dataString);
      res.end();
    });
};
