const express = require('express');

const path = require('path');
const api = require("./api");
const { _router } = require('./app');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
  app.use('/api', api)
  app.use(express.static(path.join(__dirname, 'public')));
console.log("Server runnning on port: " , port)
app.listen(port);