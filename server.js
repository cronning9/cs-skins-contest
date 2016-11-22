'use strict';

/* DEPENDENCIES */

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
// const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const config = require('./config');

// ** Import Steam router middleware **
const steam = require('./routing/steam');

/* ENVIRONMENT VARIABLES, ETC */
const compiler = webpack(webpackConfig);
process.env.PORT = process.env.PORT || config.port;

/* MIDDLEWARE */
// if (process.env.NODE_ENV === 'development') {
  console.log('in dev');
  app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    historyApiFallback: true
  }));
  app.use(morgan('dev'));
// }

app.use('/steam', steam);

/* ROUTES */
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('*', express.static(path.join(__dirname, 'dist/index.html')));

/* START SERVER */
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
