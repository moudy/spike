var main = require('./main');
var Spike = require('./spike');

module.exports = function (spikeName) {
  var spike = new Spike(spikeName);
  main.log(spike.name);
  main.log(spike.readme() + '\n', 'grey');
};
