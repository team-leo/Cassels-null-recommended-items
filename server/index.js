const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var models = require('./models');
var controllers = require('./controllers');
var app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

app.get('/', controllers.fetchItems);

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})