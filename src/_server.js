// server.jsx
/* eslint-disable */


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 4000;

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});




/**
 var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
app.get('/oeuvres', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})
 */