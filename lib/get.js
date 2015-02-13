'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName) {
  var data
  res.writeHead(200, {'Content-Type' : 'text/plain'});

  fs.readFile('../data/' + fileName + '.txt' , function (err, data) {
    if (err) throw err;
    var dataString = data.toString('utf-8');
    res.write(dataString);
    res.end();
  });
}
