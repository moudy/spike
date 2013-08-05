require('colors');

var path = require('path');
var userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];

exports.create = require('./create');
exports.list = require('./list');
exports.info = require('./info');
exports.spikesPath = path.join(__dirname, './../spikes');
exports.userSpikesPath = path.join(userHome, '.spikes');

exports.log = function (msg, color) {
  color || (color = 'white');
  console.log(msg[color]);
};

exports.error = function (msg) {
  exports.log(msg, 'red');
  process.exit(1);
};
