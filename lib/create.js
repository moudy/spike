var ncp = require('ncp').ncp;
var path = require('path');
var Scene = require('./scene');

module.exports = function (sceneName, destinationName) {
  var scene = new Scene(sceneName, destinationName);

  ncp(scene.sourcePath(), scene.destinationPath(), function (err) {
    if (err) return console.error(err);
    console.log("Created '" + path.basename(scene.destinationName) + "'");
  });
};

