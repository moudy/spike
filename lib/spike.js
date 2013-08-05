var path = require('path');
var fs = require('fs');
var main = require('./main');

var Spike = function (name, destinationName) {
  this.name = name;
  this.destinationName = (destinationName || this.defaultDestinationName());
};

Spike.prototype.defaultDestinationName = function () {
  return ['spike', this.name, new Date().getTime()].join('-');
};

Spike.prototype.sourcePath = function () {
  var userSpikePath = path.join(main.userSpikesPath, this.name);
  if (fs.existsSync(userSpikePath)) return userSpikePath;

  var spikePath = path.join(main.spikesPath, this.name);
  if (fs.existsSync(spikePath)) return spikePath;

  main.error("No spike found for: " + this.name);
};

Spike.prototype.destinationPath = function () {
  return path.join(process.cwd(), this.destinationName);
};

Spike.prototype.description = function () {
  return [this.name, this.readme(), ''].join('\n');
};

Spike.prototype.readme = function () {
  if (this._readme) return this._readme;

  var readmePathPlain = path.join(this.sourcePath(), 'README');
  var readmePathMD = path.join(this.sourcePath(), 'README.md');

  var readmePath;
  if (fs.existsSync(readmePathPlain)) {
    readmePath = readmePathPlain;
  } else if (fs.existsSync(readmePathMD)) {
    readmePath = readmePathMD;
  }

  this._readme = readmePath ? fs.readFileSync(readmePath).toString() : '(no readme)';
  return this._readme;
};

module.exports = Spike;
