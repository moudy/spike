var fs = require('fs');
var main = require('./main');
var info = require('./info');

module.exports = function (verbose) {
  var list = function (error, files) {
    if (error) return main.log(error);

    // Don't list hidden files
    files = files.filter(function (f) { return !(/^\./.test(f)); });

    if (verbose) {
      files.map(info);
    } else {
      main.log(files.join('\n'));
    }
  };

  fs.readdir(main.spikesPath, list);

  if (fs.existsSync(main.userSpikesPath)) {
    fs.readdir(main.userSpikesPath, list);
  }
};

