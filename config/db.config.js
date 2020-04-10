module.exports = {
    HOST: process.env.MYSQL_DB_HOST,
    USER: process.env.MYSQL_DB_USER,
    PASSWORD: process.env.MYSQL_DB_PASSWORD,
    DB: process.env.MYSQL_DB_NAME,
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 50000,
    },
};
