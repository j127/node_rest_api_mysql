const db = require("../models");
const Post = db.models.Post;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "content cannot be empty",
        });
    }

    const postData = {
        title: req.body.title,
        description: req.body.description,
        is_published: req.body.is_published ? req.body.is_published : false,
        author: req.body.author ? req.body.author : false,
    };

    Post.create(postData)
        .then(data => res.send(data))
        .catch(err =>
            res.status(500).send({
                message:
                    err.message || "an error occurred while saving the post",
            })
        );
};

exports.getAllPosts = (req, res) => {
    const title = req.query.title;
    Post.findAll({
        where: { author: { [Op.like]: `%${title}%` }, published: true },
    })
        .then(data => res.send(data))
        .catch(err =>
            res.status(500).send({
                message: err.message || "unable to retrieve posts",
            })
        );
};

exports.getPostById = (req, res) => {
    const paramId = req.params.id;
    console.log(paramId);
    // Post.
};
exports.updatePostById = (req, res) => {};
exports.deletePostById = (req, res) => {};
exports.deleteAllPosts = (req, res) => {};
exports.getAllPublishedPosts = (req, res) => {};
exports.getAllPostByAuthorName = (req, res) => {};
exports.getPostByTitle = (req, res) => {};
