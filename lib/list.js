var fs = require('fs');
var main = require('./main');
var Scene = require('./scene');

module.exports = function (verbose) {
  fs.readdir(main.scenesPath, function (error, files) {
    if (error) return console.log(error);

    if (verbose) {
      files = files.map(function (f) { return new Scene(f).description(); });
    }

    console.log(files.join('\n'));
  });
};

