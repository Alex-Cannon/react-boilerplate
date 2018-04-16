// Ensure that all requires from here on are compiled to ES2015
require('babel-register');

const argv = require('yargs').argv;

process.env.NODE_ENV = argv.env || 'production';

console.log('Running ' + process.env.NODE_ENV + "...");

require('./app/server/server.js');