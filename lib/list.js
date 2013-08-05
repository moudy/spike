var fs = require('fs');
var main = require('./main');
var info = require('./info');

module.exports = function (verbose) {
  fs.readdir(main.spikesPath, function (error, files) {
    if (error) return main.log(error);

    if (verbose) {
      files.map(info);
    } else {
      main.log(files.join('\n'));
    }
  });
};

