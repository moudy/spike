var main = require('./main');
var Scene = require('./scene');

module.exports = function (sceneName) {
  var scene = new Scene(sceneName);
  main.log(scene.name);
  main.log(scene.readme() + '\n', 'grey');
};
