'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName) {

  fs.unlink('../data/' + fileName +'.txt' , function (err) {
    if (err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write(fileName + ' has been deleted');
    res.end();
  });
}
