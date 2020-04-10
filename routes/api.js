const router = require("express").Router();
const ctrl = require("../controllers/postController");

router.post("/create", ctrl.create);
router.get("/all", ctrl.getAllPublishedPosts);
router.get("/id", ctrl.getPostById);
router.get("/title", ctrl.getPostByTitle);
router.get("/search", ctrl.searchPostsByTitle);
router.get("/author", ctrl.getAllPostByAuthorName);
router.put("/update/:id", ctrl.updatePostById);
router.delete("/delete/:id", ctrl.deletePostById);
router.delete("/delete/all", ctrl.deleteAllPosts);

// These should only be for admins (not implemented, because it's only
// to learn Sequelize).
router.get("/admin/all", ctrl.getAllPosts);
// etc.
//
module.exports = router;
