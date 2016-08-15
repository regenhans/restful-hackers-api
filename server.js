//dependencies
var express = require('express'),
   mongoose = require('mongoose')
   bodyParser = require('body-parser');
   api = require('./routes/api');

//mongodb
mongoose.connect('mongodb://localhost/rest_test');

//express
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//routes
app.use('/api', api);

//server
app.listen(3000);
console.log('port 3000 running');
