const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
var models = require('./models');
var controllers = require('./controllers');
// var page = require('../client/dist/index.html');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
//app.use(bodyParser.urlencoded());
//app.use(express.static('../client/src/index.html'));
// app.get('/y', require('../client/dist/index.html'));

app.get('/t', controllers.fetchItems);

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})