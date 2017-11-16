const webpack = require('webpack');
const findings = require('./webpack.config.findings.js');
const about = require('./webpack.config.about.js');

module.exports = [
  findings, about
];
