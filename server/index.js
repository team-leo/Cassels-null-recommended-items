const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
var models = require('./models');
var controllers = require('./controllers');
var app = express();
const compression = require('compression');

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://18.219.226.194", neo4j.auth.basic("neo4j", "neo4j"));
const session = driver.session();
const {performance} = require('perf_hooks');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/api/recs', controllers.fetchBundle)
app.get('/:itemId', (req, res) => {
  if (req.params.itemId.includes('loaderio')) {
  res.sendfile(path.join(__dirname, '../loaderio-d559109a5adcea2b4673a49a6126c054.txt'));
  } else {
    res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
  }
})

app.get("/loaderio-*", (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-d559109a5adcea2b4673a49a6126c054.txt'));
});

app.get('/api/recommendations/:itemId', (req, res) => {
  session.run(`MATCH (n:Product {id: "${req.params.itemId}"})--(c) RETURN c`)
    .then(result => {
      const rec = result.records;
      res.send({results: rec});
    })
    .catch(e => {
      res.status(500).send(e);
    })
    .then(() => {
      return session.close();
    })
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})