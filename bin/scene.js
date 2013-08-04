#! /usr/bin/env node

var main = require('../lib/main');
var argv = require('optimist').argv;

var DEFAULT_SCENE = 'html-css-js';
var verbose, sceneName, dirName;

verbose = (argv.v || argv.verbose);

if (argv._[0] === 'list') {
  main.list(verbose);
} else if (argv._[0] === 'info') {
  sceneName = argv._[1];
  main.info(sceneName, verbose);
} else {
  dirName = argv.n || argv.name;
  sceneName = argv._[0] || DEFAULT_SCENE;
  main.create(sceneName, dirName);
}
