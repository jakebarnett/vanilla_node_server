'use strict';

var http = require('http');
var router = require('./router.js');

var server = http.createServer(function (req,res) {
  var fileName = req.url.toString().split('/')[2];
  if(req.url === '/cats' || fileName) {
    router(req, res);
  }
});

server.listen(3000, function () {
  console.log('server listening');
})
