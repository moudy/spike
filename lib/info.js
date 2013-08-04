var Scene = require('./scene');

module.exports = function (scene, verbose) {
  var scene = new Scene(scene);
  console.log(scene.description());
};
