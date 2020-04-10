const Sequelize = require("sequelize");
const config = require("../config/db.config");

const database = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});

// I don't think this is ideal, but it works for the moment.
const Post = require("./post")(database, Sequelize);

const db = {
    Sequelize,
    databaseConf: database,
    models: { Post },
};

module.exports = db;
