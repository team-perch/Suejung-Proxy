require('newrelic');
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));


// Suejung payment calculator service

const options = {
  target: 'http://3.15.39.58:3001/',
  changeOrigin: true,
  ws: true,
};

const apiProxy = proxy(options);
app.use('/', apiProxy);


// Laurence images service

const optionsImages = {
  target: 'http://52.9.82.201:3003/',
  changeOrigin: true,
  ws: true,
};

const apiProxyImages = proxy(optionsImages);
app.use('/', apiProxyImages);


// Peter graph service

const optionsGraph = {
  target: 'http://54.67.110.125:3002/',
  changeOrigin: true,
  ws: true,
};

const apiProxyGraph = proxy(optionsGraph);
app.use('/', apiProxyGraph);

