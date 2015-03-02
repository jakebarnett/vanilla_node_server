'use strict';

var fs = require('fs');

module.exports = function (req, res, fileName) {
  var dataString;
  var dataObject = {};
  var newDataString;
  var newDataObject = {};
  var completeString;

  req.on('data', function (data) {

    newDataString = data.toString('utf-8');
    newDataObject = JSON.parse(newDataString);

    fs.readFile(__dirname + '/../data/' + fileName + '.json', function (err, data){
      dataString = data.toString('utf-8');
      dataObject = JSON.parse(dataString);
      updateObject(dataObject, newDataObject);
      completeString = JSON.stringify(dataObject);
      fs.writeFile(__dirname + '/../data/' + fileName + '.json', completeString);
      res.writeHead(200 , {'Content-Type':'text/plain'});
      res.write(completeString);
      res.end();
    });

  });

  function updateObject (object1, object2){
    for (var key in object2) {
      if (key){
      object1[key] = object2[key];
      }
    }
  }

};


