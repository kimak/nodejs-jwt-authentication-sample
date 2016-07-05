var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    quoter  = require('./quoter');

var places = require('./places.json');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

app.use('/user/', jwtCheck);

app.get('/user/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/user/places', function(req, res) {
  res.status(200).send(places);
});
