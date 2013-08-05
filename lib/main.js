var path = require('path');
var colors = require('colors');

exports.create = require('./create');
exports.list = require('./list');
exports.info = require('./info');
exports.spikesPath = path.join(__dirname, './../spikes');

exports.log = function (msg, color) {
  color || (color = 'white');
  console.log(msg[color]);
};
