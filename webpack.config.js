'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {ForkCheckerPlugin} = require('awesome-typescript-loader');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: path.join(__dirname + '/app'),
  entry: ['./main.jsx'],

  output: {
    path: path.join(__dirname, '/dist'),
    baseUrl: '/',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',

      resolve: {
            extensions: ['', '.ts', '.tsx', '.js', '.jsx']
                },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig,
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NoErrorsPlugin(),
            new ForkCheckerPlugin(),
            new webpack.ProvidePlugin({
              'Promise': 'es6-promise',
              'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
            })
            ],
  devServer: {
    historyApiFallback: true
  }
};
