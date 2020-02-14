db.createUser({
    user: 'user',
    pwd: 'secret',
    roles: [
        {
            role: 'readWrite',
            db: 'movies'
        }
    ]
});

db.movies.insert({
    title: 'movie-1',
    plot: 'movie-1 desc',
    rating: 4.5,
    addedAt: Date.now()
});

db.movies.insert({
    title: 'movie-2',
    plot: 'movie-2 desc',
    rating: 3.7,
    addedAt: Date.now()
});

const movies = db.movies.find();

db.comments.insert({
    author: 'comment-1',
    text: 'comment-1 content',
    addedAt: Date.now(),
    movie: movies[0]._id
});

db.comments.insert({
    author: 'comment-2',
    text: 'comment-2 content',
    addedAt: Date.now(),
    movie: movies[0]._id
});

db.comments.insert({
    author: 'comment-3',
    text: 'comment-3 content',
    addedAt: Date.now(),
    movie: movies[1]._id
});

db.comments.insert({
    author: 'comment-4',
    text: 'comment-4 content',
    addedAt: Date.now(),
    movie: movies[1]._id
});