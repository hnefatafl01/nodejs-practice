'use strict';

var fs = require('fs');

fs.readfile('/etc/paths', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(date);
});
