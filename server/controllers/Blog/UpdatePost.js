const Post = require("../../models/Blog/blogPost");

// Create a new post
const UpdatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = UpdatePost;
