const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author: { type: String, validate: /\S+/ },
    text: { type: String, validate: /\S+/ },
    addedAt: { type: Date, default: Date.now },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', require: true }
}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id.toHexString();
            delete ret._id;
            delete ret.__v;
        }
    }
});

const Comment = mongoose.model('Comment', schema);

module.exports = Comment;
