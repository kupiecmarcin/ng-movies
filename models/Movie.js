const mongoose = require('mongoose');

const schema = new mongoose.Schema({
        title: { type: String, validate: /\S+/ },
        plot: { type: String },
        rating: { type: Number, min: 0, max: 100 },
        addedAt: { type: Date, default: Date.now }
    }, {
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id.toHexString();
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);

const Movie = mongoose.model('Movie', schema);

module.exports = Movie;
