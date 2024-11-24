const Post = require("../../models/Blog/blogPost");

// Create a new post
const AddBlog = async (req, res) => {
  // Extract fields from the request body
  const { title, description, image, imageText, userId, category } = req.body;

  // Validate input
  if (!userId || !title || !description || !image || !imageText || !category) {
    return res.status(400).json({
      message:
        "UserId, title, description, image, imageText, and category are required.",
    });
  }

  // Optional: Validate the category if you have predefined options
  const validCategories = [
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ message: "Invalid category provided." });
  }

  try {
    // Create a new post
    const newPost = new Post({
      userId,
      title,
      description,
      image,
      imageText,
      category, // Include the category in the new post
    });

    // Save the post to the database
    await newPost.save();

    // Respond with the created post
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error creating post:", err.message);
    res.status(500).json({ message: "Failed to create the post." });
  }
};

module.exports = AddBlog;
