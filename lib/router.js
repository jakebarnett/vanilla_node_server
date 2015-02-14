'use strict';

var get = require('./get.js');
var post = require('./post.js');
var put = require('./put.js');
var patch = require('./patch.js');
var deleteRequest = require('./delete.js');

module.exports = function (req, res) {

  var fileName = req.url.toString().split('/')[2];

  if (req.method === 'GET'){
    get(req, res, fileName);
  }
  else if (req.method === 'POST') {
    post(req, res);
  }
  else if(req.method === 'PUT') {
    put(req, res, fileName);
  }
  else if(req.method === 'PATCH') {
    patch(req, res, fileName);
  }
  else if(req.method === 'DELETE') {
    deleteRequest(req, res, fileName);
  }
};



