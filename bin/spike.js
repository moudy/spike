#! /usr/bin/env node

var main = require('../lib/main');
var argv = require('optimist').argv;

var DEFAULT_SCENE = 'html-css-js';
var verbose, spikeName, dirName;

verbose = (argv.v || argv.verbose);

if (argv._[0] === 'list') {
  main.list(verbose);
} else if (argv._[0] === 'info') {
  spikeName = argv._[1];
  main.info(spikeName, verbose);
} else {
  dirName = argv.n || argv.name;
  spikeName = argv._[0] || DEFAULT_SCENE;
  main.create(spikeName, dirName);
}
