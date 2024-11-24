const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Cloudinary connected successfully");
  } catch (error) {
    console.error("Error connecting to Cloudinary:", error);
  }
};

// Export the cloudinary instance along with the connect function
module.exports = {
  cloudinaryConnect,
  cloudinary,
};

// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// module.exports = cloudinary;
