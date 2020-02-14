'use strict';

const Movie = require('../models/Movie.js');


const save = async ({ title, rating, plot }) => {
    const movie = new Movie({ title, rating, plot });
    return await movie.save();
};

const get = async (id) => {
    return await Movie.findOne({ _id: id });
};

const list = async () => {
    return await Movie.find({});
};

module.exports = {
    save,
    get,
    list
};
