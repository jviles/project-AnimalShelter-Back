const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const response = require('./helpers/response');
const configure = require('./config/passport');
const animal = require('./routes/animal');
const shelter = require ('./routes/shelter');
const auth = require('./routes/auth');
const adopter = require('./routes/adopter');

const app = express();

mongoose.connect('mongodb://localhost/shelters');

app.use(session({
    secret: 'todo-app',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
}));

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

configure(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/animal', animal);
app.use('/shelter',shelter);
app.use('/auth', auth);
app.use('/adopter', adopter);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    console.log('ERRORMEU', req.method, req.path, err);
    res.status(404).json({error: 'Not found'});
});

// error handlers
app.use(function(err, req, res, next) {
    console.log('ERROR', req.method, req.path, err);
    if (!res.headerSent) {
        res.status(500).json({error: 'Unexpected error'});
    }
});


module.exports = app;
