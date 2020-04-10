const db = require("../models");
const { Post } = db.models;
const Op = db.Sequelize.Op;

/**
 * Create a post
 */
const create = (req, res) => {
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

/**
 * Get a single post by title
 */
const getPostByTitle = (req, res) => {
    const title = req.query.title;
    Post.findOne({
        where: { title: { [Op.like]: `%${title}%` }, published: true },
    })
        .then(data => res.send(data))
        .catch(err =>
            res.status(500).send({
                message: err.message || "unable to retrieve posts",
            })
        );
};

/**
 * Search for posts by title
 */
const searchPostsByTitle = (req, res) => {
    const title = req.query.title;
    Post.findAll({
        where: { title: { [Op.like]: `%${title}%` }, published: true },
    })
        .then(data => res.send(data))
        .catch(err =>
            res.status(500).send({
                message: err.message || "unable to retrieve posts",
            })
        );
};

/**
 * Get a post by its ID
 */
const getPostById = (req, res) => {
    const { id } = req.params;
    Post.findOne({
        where: { id },
    })
        .then(data => res.send(data))
        .catch(err =>
            res.status(500).send({
                message:
                    err.message ||
                    `an error occurred while fetching post ${id}`,
            })
        );
};

const updatePostById = (req, res) => {
    const { id } = req.params;
    Post.update(req.body, {
        where: { id },
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "post updated",
                });
            } else {
                res.send({
                    message: `cannot update post ${id}`,
                });
            }
        })
        .catch(err =>
            res.status(500).send({
                message: err.message || `error while updating post ${id}`,
            })
        );
};

/**
 * Destroy a post by ID
 */
const deletePostById = (req, res) => {
    const { id } = req.params;
    Post.destroy({
        where: { id },
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: `post ${id} deleted`,
                });
            } else {
                res.send({
                    message: `cannot delete post ${id}`,
                });
            }
        })
        .catch(err =>
            res.status(500).send({
                message: err.message || `cannot delete post ${id}`,
            })
        );
};

/**
 * Delete all posts
 */
const deleteAllPosts = (req, res) => {
    Post.destroy({
        where: {},
        truncate: false,
    })
        .then(nums => {
            result.send({
                message: `${nums} post(s) deleted`,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error: cannot delete posts",
            });
        });
};

/**
 * Get all the published posts
 */
const getAllPublishedPosts = (_req, res) => {
    Post.findAll({
        where: { is_published: true },
    })
        .then(data => {
            res.send(data);
        })
        .catch(err =>
            res.status(500).send({
                message: err.message || "something went wrong",
            })
        );
};

/**
 * Get all posts
 */
const getAllPosts = (_req, res) => {
    Post.findAll({
        where: {},
    })
        .then(data => {
            res.send(data);
        })
        .catch(err =>
            res.status(500).send({
                message: err.message || "something went wrong",
            })
        );
};

/**
 * Get all posts by author name (or fragment of name)
 */
const getAllPostByAuthorName = (req, res) => {
    const { name } = req.params;
    const condition = name ? { author: { [Op.like]: `%${name}%` } } : null;
    Post.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "something went wrong",
            });
        });
};

module.exports = {
    create,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
    deleteAllPosts,
    getAllPublishedPosts,
    getAllPostByAuthorName,
    getPostByTitle,
    searchPostsByTitle,
};
