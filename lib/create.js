var ncp = require('ncp').ncp;
var path = require('path');
var Spike = require('./spike');

module.exports = function (spikeName, destinationName) {
  var spike = new Spike(spikeName, destinationName);

  ncp(spike.sourcePath(), spike.destinationPath(), function (err) {
    if (err) return console.error(err);
    console.log("Created '" + path.basename(spike.destinationName) + "'");
  });
};

