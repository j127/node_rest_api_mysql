# Express / Sequelize / MySQL

Some code that is roughly based on [a Sequelize tutorial](https://christosploutarchou.com/how-to-build-simple-node-js-rest-api/) (with changes).

## Running It

Copy the `.env-example` file to `.env-example` and fill in the MySQL or MariaDB settings.

Then do:

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

## Example Results

```text
MariaDB [node_rest_api_mysql]> show tables;
+-------------------------------+
| Tables_in_node_rest_api_mysql |
+-------------------------------+
| posts                         |
+-------------------------------+
1 row in set (0.00 sec)

MariaDB [node_rest_api_mysql]> describe posts;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| id           | int(11)      | NO   | PRI | NULL    | auto_increment |
| title        | varchar(255) | YES  |     | NULL    |                |
| description  | text         | YES  |     | NULL    |                |
| is_published | tinyint(1)   | YES  |     | NULL    |                |
| author       | varchar(255) | YES  |     | NULL    |                |
| createdAt    | datetime     | NO   |     | NULL    |                |
| updatedAt    | datetime     | NO   |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+
7 rows in set (0.01 sec)

MariaDB [node_rest_api_mysql]> select * from posts;
Empty set (0.01 sec)

MariaDB [node_rest_api_mysql]> select * from posts;
+----+-------------+-----------------------+--------------+--------+---------------------+---------------------+
| id | title       | description           | is_published | author | createdAt           | updatedAt           |
+----+-------------+-----------------------+--------------+--------+---------------------+---------------------+
|  1 | hello world | this is a sample post |            1 | Josh   | 2020-04-10 05:21:54 | 2020-04-10 05:21:54 |
+----+-------------+-----------------------+--------------+--------+---------------------+---------------------+
1 row in set (0.00 sec)
```
