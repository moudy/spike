var path = require('path');
var colors = require('colors');

exports.create = require('./create');
exports.list = require('./list');
exports.info = require('./info');
exports.scenesPath = path.join(__dirname, './../scenes');

exports.log = function (msg, color) {
  color || (color = 'white');
  console.log(msg[color]);
};
