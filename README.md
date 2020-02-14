# Demo movies

> API for creating and fetching movies

## Getting started

These instructions will show you how to run app.

### Start

```shell
    $ git clone 
    $ cd movies
    $ docker-compose up
```

### Try

Db is initialized with dummy data. App is reachable via 5000 port.

Movie - { title, plot, rating, addedAt }
Comment - { author, text, addedAt, movie }

GET

curl -i localhost:5000/movies   - list all movies
curl -i localhost:5000/comments - list all comments

curl -i localhost:5000/movies/<movie_id>        - get movie with id
curl -i localhost:5000/comments/<comment_id>    - get comment with id

curl -i localhost:5000/movies/<movie_id>/comments   - get all comments for specified movie

POST

curl -i localhost:5000/movies -H 'Content-Type: application/json' -d '{"title": "Die Hard"}' 
curl -i localhost:5000/comments -H 'Content-Type: application/json' -d '{"author": "Bruce Willis", "movie": "xxx", "text": "bla bla"}' 

returns { id, addedAt }
