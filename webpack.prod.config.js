'use strict';

const config = require('./webpack.config.js');
const webpack = require('webpack');


config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
);

// minify
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {}
  })
);

module.exports = config;
