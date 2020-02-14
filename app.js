'use strict';

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const handleError = require('./utils/error.js').handleError;
const routes = require('./routes');

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const config = require('./config.js');
require('./setup.js')(app, config);

app.use('/movies', routes.movies);
app.use('/comments', routes.comments);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.warn(err);
    err = handleError(err);
    res.status(err.status || 500);
    res.json(err);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
