var express = require('express'),
    quoter  = require('./quoter');

var places = require('./places.json');


var app = module.exports = express.Router();

app.get('/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/places', function(req, res) {
  res.status(200).send(places);
});
