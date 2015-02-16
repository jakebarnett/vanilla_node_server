'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName) {
  //delete file from directory
  fs.unlink(__dirname + '/../data/' + fileName +'.json' , function (err) {
    if (err) throw err;
    //write response
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write(fileName + ' has been deleted');
    res.end();
  });
};
