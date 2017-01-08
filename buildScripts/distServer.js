// var express = require('express');
// var path = require('path');
// var open = require('open');
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'

/* eslint-disable no-console */

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/employee', function (req, res) {
  res.json([
    { "id": 1, "name": "Abhi" },
    { "id": 2, "name": "Ravi" },
    { "id": 3, "name": "Santosh" }
  ])
})

app.listen(port, function (err) {
  if (err) {
    console.log('==>', err);
  }
  else {
    open('http://localhost:' + port)
  }
})
