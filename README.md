# Demo movies

> API for creating and fetching movies

## Getting started

These instructions will show you how to run app.


### Start

#### Local

```shell
    $ git clone git@github.com:kupiecmarcin/ng-movies.git
    $ cd movies
    $ docker-compose up
```

#### Public - aws

```shell
http://ec2-18-185-141-51.eu-central-1.compute.amazonaws.com/
```

### Usage

Db is initialized with dummy data. App is reachable via 80 port.

Movie - { title, plot, rating, addedAt }
Comment - { author, text, addedAt, movie }

GET

```shell
curl -i localhost:80/movies   - list all movies
curl -i localhost:80/comments - list all comments

curl -i localhost:80/movies/<movie_id>        - get movie with id
curl -i localhost:80/comments/<comment_id>    - get comment with id

curl -i localhost:80/movies/<movie_id>/comments   - get all comments for specified movie
```

POST

```shell
curl -i localhost:80/movies -H 'Content-Type: application/json' -d '{"title": "Die Hard"}'

curl -i localhost:80/comments -H 'Content-Type: application/json' -d '{"author": "Bruce Willis", "movie": "xxx", "text": "bla bla"}' 

returns { id, addedAt }
```
