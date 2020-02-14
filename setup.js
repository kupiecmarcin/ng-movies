'use strict';

const mongoose = require('mongoose');
const { client } = require('./utils/client.js');

module.exports = function (app, config) {

    mongoose.connect(config.db.endpoint, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD
    }).catch(err => { console.error('Connection error', err.message); });

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function () {
        console.info('successful connection');
    });

    app.omdb = new client(config.omdb.endpoint, process.env.OMDB_API_KEY);
};
