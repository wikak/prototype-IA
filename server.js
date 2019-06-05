// server.jsx
/* eslint-disable */

// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
//app.use(serveStatic(__dirname + "/dist"));
app.use(serveStatic(path.join(__dirname, 'dist')))
var port = process.env.PORT || 5000;
app.listen(port);
app.get('/', function (req, res) {
    res.render('index', {});
  });
console.log('server started '+ port);
