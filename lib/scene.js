var path = require('path');
var fs = require('fs');
var main = require('./main');

var Scene = function (name, destinationName) {
  this.name = name;
  this.destinationName = (destinationName || this.defaultDestinationName());
};

Scene.prototype.defaultDestinationName = function () {
  return ['scene', this.name, new Date().getTime()].join('-');
};

Scene.prototype.sourcePath = function () {
  return path.join(main.scenesPath, this.name);
};

Scene.prototype.destinationPath = function () {
  return path.join(process.cwd(), this.destinationName);
};

Scene.prototype.description = function () {
  return [this.name, this.readme(), ''].join('\n');
};

Scene.prototype.readme = function () {
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

module.exports = Scene;
