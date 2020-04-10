# Express / Sequelize / MySQL

Some code that is roughly based on [a Sequelize tutorial](https://christosploutarchou.com/how-to-build-simple-node-js-rest-api/) (with many changes).

## Running It

```text
$ npm install
$ npm start
```

## Usage

```text
$ curl -XPOST http://localhost:5000/api/posts/create \
    -H "Content-Type: application/json" \
    -d '{"title":"hello world","author":"someone","is_published":true,"description":"this is a sample post"}'
```

```text
$ curl http://localhost:5000/api/posts/all
```

There are more routes in the routes file. I didn't check all of them, because it was just a quick exercise to see how Sequelize works.
