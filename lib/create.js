var path = require('path');
var ncp = require('ncp').ncp;
var main = require('./main');
var Spike = require('./spike');

module.exports = function (spikeName, destinationName) {
  var spike = new Spike(spikeName, destinationName);

  ncp(spike.sourcePath(), spike.destinationPath(), function (err) {
    if (err) return main.error(err);
    main.log("Created '" + path.basename(spike.destinationName) + "'");
  });
};

