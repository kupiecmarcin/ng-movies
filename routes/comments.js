'use strict';

const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comment.js');

router.get('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await commentsCtrl.get(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.get('/', async function (req, res, next) {
    try {
        const data = await commentsCtrl.list();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        const data = await commentsCtrl.save(req.body);
        res.json({
            id: data._id,
            addedAt: data.addedAt
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
