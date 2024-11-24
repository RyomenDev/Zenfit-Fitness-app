const express = require("express");
const router = express.Router();

const AddBlog = require("../controllers/Blog/AddBlog");
const DeletePost = require("../controllers/Blog/DeletePost");
const GetAllPosts = require("../controllers/Blog/GetAllPosts");
const GetSinglePost = require("../controllers/Blog/GetSinglePost");
const UpdatePost = require("../controllers/Blog/UpdatePost");

router.post("/post", AddBlog);
router.delete("/:id", AddBlog);
router.get("/", GetAllPosts);
router.get("/:id", GetSinglePost);
router.put("/post/:id", UpdatePost);

module.exports = router;
