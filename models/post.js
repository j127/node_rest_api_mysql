const Post = (database, Sequelize) => {
    return database.define("post", {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        is_published: {
            type: Sequelize.BOOLEAN,
        },
        author: {
            type: Sequelize.STRING,
        },
    });
};

module.exports = Post;
