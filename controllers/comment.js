'use strict';

const Comment = require('../models/Comment.js');

const save = async ({ author, text, movie }) => {
    const comment = new Comment({ author, text, movie });
    return await comment.save();
};

const get = async (id) => {
    return await Comment.findOne({ _id: id })
};

const list = async (movieId) => {
    return await Comment.find(movieId && { movie: movieId });
};

module.exports = {
    save,
    get,
    list
};
