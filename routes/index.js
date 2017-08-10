var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order');

/* GET index page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SoCalTelevision.com - Home'});
});

/* GET Nasa Public Education page */
router.get('/nasa', function(req, res, next) {
  res.render('nasa-public', { title: 'Nasa Public-Education'});
});

/* GET Nasa ISS page */
router.get('/nasa-iss', function(req, res, next) {
  res.render('nasa-iss', { title: 'Nasa ISS'});
});


module.exports = router;

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	req.session.OldUrl = req.url;
	res.redirect('/user/signin');
}