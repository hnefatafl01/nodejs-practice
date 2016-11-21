'use strict';
var fs = require('fs');
var path = require('path');
var guestPath = path.join(__dirname, 'guests.json');

fs.readFile(guestPath, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  var guests = JSON.parse(data);
  console.log(guests);
});
