const Post = require("../../models/Blog/blogPost");

// Create a new post
const GetAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = GetAllPost;
