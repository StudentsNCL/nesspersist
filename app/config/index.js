var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

if(!process.env.SESSION_SECRET)
    console.warn('WARN: Set environment variable "SESSION_SECRET"');
app.use(session({
                    secret: process.env.SESSION_SECRET || 'winter is coming',
                    key: 'marks_sid',
                    saveUninitialized: true,
                    resave: true,
                    // by default, the session will expire after 1 day
                    cookie: {maxAge: 24 * 60 * 60 * 1000}
                })
);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

require('./db');

require('../routes')(app);

module.exports = app;
