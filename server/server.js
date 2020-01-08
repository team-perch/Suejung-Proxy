require('newrelic');
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));

const options = {
  target: 'http://3.15.39.58:3001/',
  changeOrigin: true,
  ws: true,
};

const apiProxy = proxy(options);
app.use('/', apiProxy);
