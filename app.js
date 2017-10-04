var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var animals = require('./routes/animals');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/animals', animals);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    res.status(404).json({error: 'Not found'});
});

// error handlers
app.use(function(err, req, res, next) {
    console.log(req.method, req.path, err);
    if (headers.sent) {
        res.status(500).json({error: 'Unexpected error'});
    }
});


module.exports = app;
