//dependencies
var express = require('express');
var router = express.Router();


//models
var Product = require('../modules/members');

//routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/members');


//return router
module.exports = router;
