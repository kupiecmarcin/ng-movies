'use strict';

const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movie.js');
const commentsCtrl = require('../controllers/comment.js');
const { MissingParamsError } = require('../utils/error.js');

router.get('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await moviesCtrl.get(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.get('/:id/comments', async function (req, res, next) {
    try {
        const movieId = req.params.id;
        const [movie, comments] = await Promise.all([moviesCtrl.get(movieId), commentsCtrl.list(movieId)]);
        res.json({ movie, comments });
    } catch (err) {
        next(err);
    }
});

router.get('/', async function (req, res, next) {
    try {
        const data = await moviesCtrl.list();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/', async function (req, res, next) {

    if (!req.body.title) {
        return next(MissingParamsError('title'));
    }

    try {
        const metainfo = await req.app.omdb.fetch(req.body.title);
        const data = await moviesCtrl.save({ ...req.body, rating: metainfo.imdbRating, plot: metainfo.Plot });
        res.json({
            id: data._id,
            addedAt: data.addedAt
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
