require('newrelic');
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('/loaderio-df624d992f8b64c55d7de0e202f77e7c.txt', express.static(path.resolve(__dirname, '..', 'loaderio-df624d992f8b64c55d7de0e202f77e7c.txt')));

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));


// Suejung payment calculator service
const options = {
  target: 'http://18.223.252.53:80/',
  changeOrigin: true,
  ws: true,
};

const apiProxy = proxy(options);
app.use('/api/costHomeOwnership', apiProxy);


// Laurence images service
const optionsImages = {
  target: 'http://52.9.82.201:3003/',
  changeOrigin: true,
  ws: true,
};

const apiProxyImages = proxy(optionsImages);
app.use('/api/images', apiProxyImages);


// Peter graph service
const optionsGraph = {
  target: 'http://54.67.110.125:3002/',
  changeOrigin: true,
  ws: true,
};

const apiProxyGraph = proxy(optionsGraph);
app.use('/api/estimates', apiProxyGraph);

